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
import PropTypes from 'prop-types';


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

  const EnhancedEpicTextAnimation = ({ text }) => {
    return (
      <span>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 360,
              rotateY: 360,
              rotateZ: 360,
              x: -1000,
              y: -1000,
              z: -1000,
              filter: "brightness(0) blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.5, 1],
              rotateX: [360, 0],
              rotateY: [360, 0],
              rotateZ: [360, 0],
              x: [0, 50, 0],
              y: [0, -100, 0],
              z: [0, 200, 0],
              filter: ["brightness(0)", "brightness(1.5) blur(0px)"],
           
          
            }}
            transition={{
              delay: index * 0.1,
              duration: 1,
              type: 'tween',  
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              transformOrigin: "center",
              fontWeight: "bold",
              letterSpacing: "2.8px",
              color: "#fff",
              willChange: "transform, opacity, filter, color, text-shadow",
              transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    );
  };
  
  EnhancedEpicTextAnimation.propTypes = {
    text: PropTypes.string.isRequired, 
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
          <EnhancedEpicTextAnimation text={displayText} />
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

        <motion.div
          initial={{
            x: -1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}

          >
          <SubTitle onClick={isAuthWhoIam ? handleOpenMainText : undefined} >
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
