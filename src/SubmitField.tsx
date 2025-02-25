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

import { Button, ButtonProps } from '@patternfly/react-core';
import { RefObject } from 'react';
import { Override, useForm } from 'uniforms';

export type SubmitFieldProps = Override<ButtonProps, { inputRef?: RefObject<HTMLButtonElement> }>;

function SubmitField({ disabled, inputRef, value = 'Submit', ...props }: SubmitFieldProps) {
  const { error, state } = useForm();

  return (
    <Button
      data-testid={'submit-field'}
      isDisabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      type="submit"
      ref={inputRef}
      variant="primary"
    >
      {value}
    </Button>
  );
}

export default SubmitField;
