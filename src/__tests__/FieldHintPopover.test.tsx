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

import { screen } from '@testing-library/dom';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import FieldHintPopover from '../FieldHintPopover';

test('<FieldHintPopover> - renders hint icon', async () => {
  render(<FieldHintPopover description="This is description" />);

  const element = screen.getByTestId('field-hint-button');
  expect(element).toBeInTheDocument();

  await act(async () => {
    fireEvent.mouseOver(element);
    waitFor(() => expect(screen.getByTestId('property-description-popover')).toBeInTheDocument());
  });
});
