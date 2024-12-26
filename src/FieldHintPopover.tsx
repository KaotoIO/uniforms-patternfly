import { Button, Content, ContentVariants, Popover, PopoverProps } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import { FunctionComponent } from 'react';
import './FieldHintPopover.scss';

interface FieldHintPopoverProps {
  default?: any;
  description?: PopoverProps['bodyContent'];
}

/**
 * Returns a label tooltip element for the form or undefined if the field has no description
 * @returns
 * @param props
 */
const FieldHintPopover: FunctionComponent<FieldHintPopoverProps> = (props) => {
  if (!props.description) {
    return null;
  }

  return (
    <Popover
      aria-label="Property description"
      bodyContent={props.description}
      data-testid="property-description-popover"
      footerContent={<Content component={ContentVariants.small}>Default: {props.default ?? <i>No default value</i>}</Content>}
      className="pf-v6-u-my-0"
      triggerAction="hover"
      withFocusTrap={false}
    >
      <Button icon={<HelpIcon />}
        variant="plain"
        type="button"
        aria-label="More info for field"
        className="field-hint-button"
        data-testid="field-hint-button"
       />
    </Popover>
  );
};

export default FieldHintPopover;
