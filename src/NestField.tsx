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

import { connectField, filterDOMProps, HTMLFieldProps } from "uniforms";
import AutoField from "./AutoField";
import './NestField.scss';
import { Card, CardBody } from "@patternfly/react-core";

export type NestFieldProps = HTMLFieldProps<object, HTMLDivElement, { helperText?: string; itemProps?: object }>;

function NestField({
  children,
  error,
  errorMessage,
  fields,
  itemProps,
  label,
  name,
  showInlineError,
  disabled,
  ...props
}: NestFieldProps) {
  return (
    <Card data-testid={"nest-field"} {...filterDOMProps(props)}>
      <CardBody className="pf-c-form nestfield-spacing">
        {label && (
          <label>
            <b>{label}</b>
          </label>
        )}
        {children || fields?.map((field) => <AutoField key={field} disabled={disabled} name={field} {...itemProps} />)}
      </CardBody>
    </Card>
  );
}

export default connectField(NestField);
