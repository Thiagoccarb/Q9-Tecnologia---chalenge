import React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

const CustomButton = (props: any) => {
  const { children, ...buttonProps } = props;
  return (
    <ButtonUnstyled
      {...buttonProps}
    >
      {children}
    </ButtonUnstyled>
  );
}

export default CustomButton;