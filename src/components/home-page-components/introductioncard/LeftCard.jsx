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
import {
  MainTextLogic,
  TitleModalLogic,
  TitleModalLogicWhoIam,
} from './modals/LogicModals';
import TitleModal from './modals/TitleModal';
import SubTitleModalWhoIam from './modals/SubTitleModalWhoIam';
import MainTextModals from './modals/MainTextModals';
import { motion } from 'framer-motion';

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
    inputWhoIamSecond,
  } = TitleModalLogicWhoIam();

  const {
    openMainText,
    handleOpenMainText,
    handleCloseMainText,
    handleInputValueMainText,
    handleInputValueMainTextSecond,
    handleInputValueMainTextThird,
    handleInputValueMainTextFour,
    handleInputValueMainTextFive,
    handleInputValueMainTextSix,
    handleInputValueMainTextSeven,
    handleInputValueMainTextEight,
    handleSubmitMainText,
    displayMaintext,
    displayMaintextSecond,
    displayMaintextThird,
    displayMaintextFour,
    displayMaintextFive,
    displayMaintextSix,
    displayMaintextSeven,
    displayMaintextEight,
    inputValueMainText,
    inputValueMainTextSecond,
    inputValueMainTextThird,
    inputValueMainTextFour,
    inputValueMainTextFive,
    inputValueMainTextSix,
    inputValueMainTextSeven,
    inputValueMainTextEight,
  } = MainTextLogic();

  const handleGithub = () => {
    window.open('https://github.com/adiletzainidinov', '_blank');
  };

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

        <motion.div initial={{
          x: -1000,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}>
          <SubTitle onClick={isAuthWhoIam ? handleOpenMainText : undefined}>
            {displayMaintext}{' '}
            <span style={{ color: '#ae08bc', animation: 'none' }}>
              {displayMaintextSecond}
            </span>
            {displayMaintextThird}{' '}
            <span style={{ color: '#ae08bc', animation: 'none' }}>
              {displayMaintextFour}
            </span>{' '}
            {displayMaintextFive}{' '}
            <span style={{ color: '#ae08bc', animation: 'none' }}>
              {displayMaintextSix}
            </span>
            {displayMaintextSeven} <span>{displayMaintextEight}</span>
          </SubTitle>
        </motion.div>

        <SocialMedia>
          <LinkedinComponent />
          <Github onClick={handleGithub}>
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
      <MainTextModals
        handleOpenMainText={openMainText}
        handleCloseMainText={handleCloseMainText}
        inputValueMainText={inputValueMainText}
        handleInputValueMainText={handleInputValueMainText}
        handleInputValueMainTextSecond={handleInputValueMainTextSecond}
        inputValueMainTextSecond={inputValueMainTextSecond}
        handleInputValueMainTextThird={handleInputValueMainTextThird}
        inputValueMainTextThird={inputValueMainTextThird}
        inputValueMainTextFour={inputValueMainTextFour}
        handleInputValueMainTextFour={handleInputValueMainTextFour}
        inputValueMainTextFive={inputValueMainTextFive}
        handleInputValueMainTextFive={handleInputValueMainTextFive}
        handleInputValueMainTextSix={handleInputValueMainTextSix}
        inputValueMainTextSix={inputValueMainTextSix}
        inputValueMainTextSeven={inputValueMainTextSeven}
        handleInputValueMainTextSeven={handleInputValueMainTextSeven}
        inputValueMainTextEight={inputValueMainTextEight}
        handleInputValueMainTextEight={handleInputValueMainTextEight}
        handleSubmitMainText={handleSubmitMainText}
      />
    </>
  );
};

export default LeftCard;
