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

import { ReactNode } from "react";
import { connectField } from "uniforms";
import AutoField from "./AutoField";
import ListDelField from "./ListDelField";
import "./ListItemField.scss";

export type ListItemFieldProps = {
  children?: ReactNode;
  value?: unknown;
};

function ListItemField({ children = <AutoField label={null} name={""} /> }: ListItemFieldProps) {
  return (
    <div
      data-testid="list-item-field"
      className="list-item-field-wrapper"
    >
      <div className="list-item-field-children-wrapper">{children}</div>
      <div>
        <ListDelField name={""} />
      </div>
    </div>
  );
}

export default connectField<ListItemFieldProps>(ListItemField, {
  initialValue: false,
});
