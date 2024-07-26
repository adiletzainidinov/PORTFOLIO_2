import React from 'react';
import {
  Container,
  ContentBox,
  IconBox,
  IconImg,
  IconsFooter,
  StyledBox,
  SubTitle,
  Title,
} from './StyledFooter';
import Telegram from '../../assets/images/telegram.jpg';

const Footer = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <Title>Designed and Developed by Zainidinov Adilet</Title>
            <SubTitle>Copyright © 2024 ZA</SubTitle>
            <IconsFooter>
              <IconBox>
                <p>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </p>
              </IconBox>
              <IconBox>
                <p>
                  <ion-icon name="logo-instagram"></ion-icon>
                </p>
              </IconBox>
              <IconBox>
                <p>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </p>
              </IconBox>
              <IconImg>
                <img src={Telegram} alt="Telegram" />
              </IconImg>
            </IconsFooter>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default Footer;
