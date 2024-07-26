import { styled } from '@mui/material';
import React from 'react';

const ErrorPage = () => {
  return (
    <StyledBox>
      <h1>404 Not Found</h1>
    </StyledBox>
  );
};

export default ErrorPage;

const StyledBox = styled('div')(() => ({
    
    "& h1": {
        fontSize: 55
    }
}))
