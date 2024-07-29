import React from 'react';
import { Container, ContentBox, StyledBox } from './styleWhoIAm';
import Left from './Left';
import Right from './Right';

const WhoIAm = () => {
  return (
    <Container>
      <StyledBox>
        <ContentBox>
          <Left />
          <Right />
        </ContentBox>
      </StyledBox>
    </Container>
  );
};

export default WhoIAm;
