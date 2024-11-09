import Telegram from '../../../assets/images/telegram.jpg';
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
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const goToWhatsApp = () => {
    openInNewTab('https://wa.me/996998083828');
  };
  const goToInstagram = () => {
    openInNewTab(
      'https://www.instagram.com/p/C06UDV6sFGp/?igsh=NXd2ZGtiZWFuM2I='
    );
  };
  const goToLinkedin = () => {
    openInNewTab(
      'https://www.linkedin.com/in/%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D1%82-%D0%B7%D0%B0%D0%B9%D0%BD%D0%B8%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-8ba279319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    );
  };
  const goToTelegram = () => {
    openInNewTab('https://t.me/Makka567');
  };
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
