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

import invariant from "invariant";
import { createAutoField } from "uniforms";
import BoolField from "./BoolField";
import DateField from "./DateField";
import ListField from "./ListField";
import NestField from "./NestField";
import NumField from "./NumField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import TextField from "./TextField";

export type AutoFieldProps = Parameters<typeof AutoField>[0];

const AutoField = createAutoField((props) => {
  if (props.options) {
    return props.checkboxes && props.fieldType !== Array ? RadioField : SelectField;
  }

  switch (props.fieldType) {
    case Array:
      return ListField;
    case Boolean:
      return BoolField;
    case Date:
      return DateField;
    case Number:
      return NumField;
    case Object:
      return NestField;
    case String:
      return TextField;
  }

  return invariant(false, "Unsupported field type: %s", props.fieldType);
});

export default AutoField;
