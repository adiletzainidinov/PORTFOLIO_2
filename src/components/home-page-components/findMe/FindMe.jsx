import React from 'react';
import Telegram from '../../../assets/images/telegram.jpg';
import { ConnectStyle, ContentBox, FindStyle, IconTelegram, IconsLogo, IconsStyle, StyledBox } from './StyledFindMe';
import { Container } from '@mui/material';

const FindMe = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <FindStyle>НАЙДИТЕ МЕНЯ В</FindStyle>
            <ConnectStyle>
            Не стесняйтесь <span style={{color: '#ae08bc'}}>связаться</span> со мной.
            </ConnectStyle>
            <IconsStyle>
              <IconsLogo>
                <p>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </p>
              </IconsLogo>
              <IconsLogo>
                <p>
                  <ion-icon name="logo-instagram"></ion-icon>
                </p>
              </IconsLogo>
              <IconsLogo>
                <p>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </p>
              </IconsLogo>
              <IconTelegram>
                <img src={Telegram} alt="Telegram" />
              </IconTelegram>
            </IconsStyle>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default FindMe;
