import React from 'react';
import { Container, ContentBox, StyledBox, SubTitle, Title } from './StyledMyProjects';
import FirstProject from './FirstProject';

const MyProjects = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <Title>Проекты</Title>
            <SubTitle>
              Каждый проект – это уникальная часть разработки 🧩
            </SubTitle>
            <FirstProject/>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default MyProjects;
