import { Button as ButtonMui, styled } from '@mui/material';
import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = 'contained',
  ...rest
}) => {
  return (
    <ButtonMuiStyle type={type} variant={variant} {...rest}>
      {children}
    </ButtonMuiStyle>
  );
};

export default Button;

const ButtonMuiStyle = styled(ButtonMui)(() => ({
  background: 'linear-gradient(to right, #4b0082, #ff00ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: 14,
  padding: '8px 20px',
  zIndex: 10,
  borderRadius: '0.1px',
  fontWeight: 600
}));
