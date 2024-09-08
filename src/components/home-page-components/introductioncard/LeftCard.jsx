import {
  BoxFlex,
  LeftCardContainer,
  SocialMedia,
  StaticText,
  SubTitle,
  TitleContainer,
  TypingText,
  Github,
} from './StyleIntroductionCard';
import LinkedinComponent from './Linkedin';
import { TitleModalLogic, TitleModalLogicWhoIam } from './modals/LogicModals';
import TitleModal from './modals/TitleModal';
import SubTitleModalWhoIam from './modals/SubTitleModalWhoIam';

const LeftCard = () => {
  const {
    isAuth,
    open,
    input,
    error,
    displayText,
    handleOpen,
    handleClose,
    handleInputValue,
    handleKeyPress,
    handleSubmin,
  } = TitleModalLogic();

  const {
    isAuthWhoIam,
    openWhoIam,
    inputWhoIam,
    errorWhoIam,
    displayTextWhoIam,
    handleOpenWhoIam,
    handleCloseWhoIam,
    handleInputValueWhoIam,
    handleKeyPressWhoIam,
    handleSubminWhoIam,
    displayTextWhoIamSecond,
    inputWhoIamSecond
  } = TitleModalLogicWhoIam();

  return (
    <>
      <LeftCardContainer>
        <TitleContainer>
          <StaticText
            isAuth={isAuth}
            onClick={isAuth ? handleOpen : undefined}
            variant="h1"
          >
            {displayText}
          </StaticText>
          <BoxFlex>
            <StaticText
              variant="h1"
              spaced
              onClick={isAuthWhoIam ? handleOpenWhoIam : undefined}
              isAuthWhoIam={isAuthWhoIam}
            >
              {displayTextWhoIam}
            </StaticText>
            <TypingText
              variant="h1"
              onClick={isAuthWhoIam ? handleOpenWhoIam : undefined}
              isAuthWhoIam={isAuthWhoIam}
            >
              {displayTextWhoIamSecond}
            </TypingText>
          </BoxFlex>
        </TitleContainer>

        <SubTitle>
          Как опытный
          <span style={{ color: '#ae08bc', animation: 'none' }}>
            Frontend-разработчик
          </span>
          , я посвящаю себя воплощению идей в инновационные веб-приложения.
          Ознакомьтесь с моими недавними{' '}
          <span style={{ color: '#ae08bc', animation: 'none' }}>проектами</span>{' '}
          и<span style={{ color: '#ae08bc', animation: 'none' }}>статьями</span>
          , которые демонстрируют мои навыки в Front-End разработке.{' '}
          <span>📍</span>
        </SubTitle>
        <SocialMedia>
          <LinkedinComponent />
          <Github>
            <p>
              <ion-icon name="logo-github"></ion-icon>
            </p>
          </Github>
        </SocialMedia>
      </LeftCardContainer>

      <TitleModal
        open={open}
        handleClose={handleClose}
        input={input}
        handleInputValue={handleInputValue}
        handleKeyPress={handleKeyPress}
        error={error}
        handleSubmin={handleSubmin}
      />

      <SubTitleModalWhoIam
        openWhoIam={openWhoIam}
        handleCloseWhoIam={handleCloseWhoIam}
        inputWhoIam={inputWhoIam}
        handleInputValueWhoIam={handleInputValueWhoIam}
        handleKeyPressWhoIam={handleKeyPressWhoIam}
        errorWhoIam={errorWhoIam}
        handleSubminWhoIam={handleSubminWhoIam}
        inputWhoIamSecond={inputWhoIamSecond}
      />
    </>
  );
};

export default LeftCard;
