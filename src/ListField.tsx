/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Split, SplitItem } from "@patternfly/react-core";
import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from "react";
import { HTMLFieldProps, connectField, filterDOMProps } from "uniforms";
import FieldDetailsPopover from "./FieldDetailsPopover";
import ListAddField from "./ListAddField";
import ListItemField from "./ListItemField";
import { WrapFieldProps } from "./wrapField";

export type ListFieldProps = HTMLFieldProps<
  unknown[],
  HTMLDivElement,
  WrapFieldProps &
  {
    children?: ReactNode;
    info?: string;
    error?: boolean;
    initialCount?: number;
    itemProps?: object;
    showInlineError?: boolean;
  }
>;

declare module "uniforms" {
  interface FilterDOMProps {
    wrapperCol: never;
    labelCol: never;
  }
}

filterDOMProps.register("minCount", "wrapperCol", "labelCol");

function ListField({
  children = <ListItemField name="$" />,
  error,
  errorMessage,
  info,
  initialCount,
  itemProps,
  label,
  name,
  value,
  showInlineError,
  deprecated,
  defaultValue,
  ...props
}: ListFieldProps) {
  return (
    <div data-testid={"list-field"} {...filterDOMProps(props)}>
      <Split hasGutter>
        <SplitItem>
          {label && (
            <label>
              {label}
              {props.description && (
                <FieldDetailsPopover default={defaultValue} description={props.description} deprecated={deprecated} />
              )}
            </label>
          )}
        </SplitItem>
        <SplitItem isFilled />
        <SplitItem>
          <ListAddField name={"$"} initialCount={initialCount} />
        </SplitItem>
      </Split>

      <div>
        {value?.map((item, itemIndex) =>
          Children.map(children, (child, childIndex) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<{ name: string }, string>, {
                  key: `${itemIndex}-${childIndex}`,
                  name: child.props.name
                    ?.split(/\$(.*)/s)
                    .slice(0, -1)
                    .join(`${itemIndex}`),
                  ...itemProps,
                })
              : child
          )
        )}
      </div>
    </div>
  );
}

export default connectField(ListField);
