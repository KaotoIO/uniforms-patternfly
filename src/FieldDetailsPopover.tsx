import { PopoverProps } from '@patternfly/react-core';
import { FunctionComponent } from 'react';
import FieldHintPopover from './FieldHintPopover';
import FieldDeprecatedPopover from './FieldDeprecatedPopover';

interface FieldDetailsPopoverProps {
  default?: any;
  description?: PopoverProps['bodyContent'];
  deprecated?: boolean;
}

/**
 * Returns a label tooltip element for the form or undefined if the field has no description
 * @returns
 * @param props
 */
const FieldDetailsPopover: FunctionComponent<FieldDetailsPopoverProps> = (props) => {

  return (<>
    <FieldHintPopover default={props.default} description={props.description} />
    <FieldDeprecatedPopover deprecated={props.deprecated}/>
    </>);
};

export default FieldDetailsPopover;