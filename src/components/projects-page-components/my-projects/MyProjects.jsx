import React, { useState } from 'react';
import {
  Container,
  ContentBox,
  StyledBox,
  SubTitle,
  Title,
} from './StyledMyProjects';
import FirstProject from './FirstProject';
import SecondProject from './SecondProject';
import ThirdProject from './ThirdProject';
import Modal from '../../../shared/UI/modal/Modal';
import Button from '../../../shared/UI/button/Button';

const MyProjects = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <Title>Проекты</Title>
            <SubTitle>
              Каждый проект – это уникальная часть разработки 🧩
            </SubTitle>
            <FirstProject />
            <SecondProject handleOpen={handleOpen} />
            <ThirdProject />
            <Modal open={open} onClose={handleClose}>
              Этот проект находится в разработке
              <Button onClick={handleClose} style={{marginTop: 20}}>Закрыть</Button>
            </Modal>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default MyProjects;
