import Telegram from '../../../assets/images/telegram.jpg';
import { goToInstagram, goToLinkedin, goToTelegram, goToWhatsApp } from '../../../utils/externalLinks';
import {
  ConnectStyle,
  ContentBox,
  FindStyle,
  IconTelegram,
  IconsLogo,
  IconsStyle,
  StyledBox,
} from './StyledFindMe';
import { Container } from '@mui/material';

const FindMe = () => {

  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <FindStyle>НАЙДИТЕ МЕНЯ В</FindStyle>
            <ConnectStyle>
              Не стесняйтесь <span style={{ color: '#ae08bc' }}>связаться</span>{' '}
              со мной.
            </ConnectStyle>
            <IconsStyle>
              <IconsLogo onClick={goToWhatsApp}>
                <p>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </p>
              </IconsLogo>
              <IconsLogo onClick={goToInstagram}>
                <p>
                  <ion-icon name="logo-instagram"></ion-icon>
                </p>
              </IconsLogo>
              <IconsLogo onClick={goToLinkedin}>
                <p>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </p>
              </IconsLogo>
              <IconTelegram onClick={goToTelegram}>
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
