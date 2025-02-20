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

import { Checkbox, Radio } from "@patternfly/react-core";
import { Fragment, useMemo } from "react";
import { filterDOMProps } from "uniforms";
import { SelectCheckboxProps } from "./SelectField.types";

function xor<T>(item: T, array: T[]) {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
}

filterDOMProps.register("autoValue");

function SelectCheckboxField(props: SelectCheckboxProps) {
  const Group = useMemo(() => (props.fieldType === Array ? Checkbox : Radio), [props]);

  return (
    <div data-testid={"select-checkbox-field"} {...filterDOMProps(props)}>
      {props.label && <label>{props.label}</label>}
      {props.options!.map((item: string, index: number) => {
        const label = props.transform?.(item).label ?? item;

        return (
          <Fragment key={index}>
            <label htmlFor={props.id}>{label}</label>
            <Group
              id={`${props.id}-${item}`}
              isDisabled={props.disabled}
              name={props.name}
              aria-label={props.name}
              value={props.value}
              isChecked={
                props.fieldType === Array && Array.isArray(props.value)
                  ? props.value!.includes(item)
                  : props.value === item
              }
              onChange={() => {
                props.onChange(props.fieldType === Array && Array.isArray(props.value) ? xor(item, props.value) : item);
              }}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default SelectCheckboxField;
