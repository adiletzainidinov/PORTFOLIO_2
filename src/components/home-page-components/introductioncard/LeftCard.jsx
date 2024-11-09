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
import MainTextModals from './modals/MainTextModals';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { maintTextPost } from '../../../store/slices/edit-profile-slice/editProfile.thunk';

const LeftCard = () => {
  const dispatch = useDispatch();
  const [openMainText, setOpenMainText] = useState(false);
  const [inputValueMainText, setInputValueMainText] = useState('');
  const [inputValueMainTextSecond, setInputValueMainTextSecond] = useState('');
  const [inputValueMainTextThird, setInputValueMainTextThird] = useState('');
  const [inputValueMainTextFour, setInputValueMainTextFour] = useState('');
  const [inputValueMainTextFive, setInputValueMainTextFive] = useState('');
  const [inputValueMainTextSix, setInputValueMainTextSix] = useState('');
  const [inputValueMainTextSeven, setInputValueMainTextSeven] = useState('');
  const [inputValueMainTextEight, setInputValueMainTextEight] = useState('');
  const [displayMaintext, setDisplayMainText] = useState('Как опытный');
  const [displayMaintextSecond, setDisplayMainTextSecond] = useState(
    'Frontend-разработчик'
  );
  const [displayMaintextThird, setDisplayMainTextThird] =
    useState(`, я посвящаю себя воплощению идей в инновационные веб-приложения.
          Ознакомьтесь с моими недавними`);
  const [displayMaintextFour, setDisplayMainTextFour] = useState('проектами');
  const [displayMaintextFive, setDisplayMainTextFive] = useState('и');
  const [displayMaintextSix, setDisplayMainTextSix] = useState('статьями');
  const [displayMaintextSeven, setDisplayMainTextSeven] = useState(
    ', которые демонстрируют мои навыки в Front-End разработке.'
  );
  const [displayMaintextEight, setDisplayMainTextEight] = useState('📍');

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

  const handleGithub = () => {
    window.open('https://github.com/adiletzainidinov', '_blank');
  };

  const handleOpenMainText = () => {
    setOpenMainText(true);
  };

  const handleCloseMainText = () => {
    setOpenMainText(false);
  };

  const handleInputValueMainText = (e) => {
    setInputValueMainText(e.target.value);
  };

  const handleInputValueMainTextSecond = (e) => {
    setInputValueMainTextSecond(e.target.value);
  };

  const handleInputValueMainTextThird = (e) => {
    setInputValueMainTextThird(e.target.value);
  };

  const handleInputValueMainTextFour = (e) => {
    setInputValueMainTextFour(e.target.value);
  };

  const handleInputValueMainTextFive = (e) => {
    setInputValueMainTextFive(e.target.value);
  };

  const handleInputValueMainTextSix = (e) => {
    setInputValueMainTextSix(e.target.value);
  };

  const handleInputValueMainTextSeven = (e) => {
    setInputValueMainTextSeven(e.target.value);
  };

  const handleInputValueMainTextEight = (e) => {
    setInputValueMainTextEight(e.target.value);
  };

  const handleSubmitMainText = () => {
    if (
      inputValueMainText.length +
        inputValueMainTextSecond.length +
        inputValueMainTextThird.length +
        inputValueMainTextFour.length +
        inputValueMainTextFive.length +
        inputValueMainTextSix.length +
        inputValueMainTextSeven.length +
        inputValueMainTextEight.length ===
      211
    ) {
      const newDataMainText = {
        first: inputValueMainText,
        second: inputValueMainTextSecond,
        third: inputValueMainTextThird,
        four: inputValueMainTextFour,
        five: inputValueMainTextFive,
        six: inputValueMainTextSix,
        seven: inputValueMainTextSeven,
        eight: inputValueMainTextEight,
      };
      dispatch(maintTextPost(newDataMainText));
      setInputValueMainText('');
      setInputValueMainTextSecond('');
      setInputValueMainTextThird('');
      setInputValueMainTextFour('');
      setInputValueMainTextFive('');
      setInputValueMainTextSix('');
      setInputValueMainTextSeven('');
      setInputValueMainTextEight('');
      setDisplayMainText(inputValueMainText);
      setDisplayMainTextSecond(inputValueMainTextSecond);
      setDisplayMainTextThird(inputValueMainTextThird);
      setDisplayMainTextFour(inputValueMainTextFour);
      setDisplayMainTextFive(inputValueMainTextFive);
      setDisplayMainTextSix(inputValueMainTextSix);
      setDisplayMainTextSeven(inputValueMainTextSeven);
      setDisplayMainTextEight(inputValueMainTextEight);
      setOpenMainText(false);
    }
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
          {displayMaintextSeven} <span >{displayMaintextEight}</span>
        </SubTitle>
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

// <SubTitle onClick={isAuthWhoIam ? handleOpenMainText : undefined}>
// Как опытный{' '}
// <span style={{ color: '#ae08bc', animation: 'none' }}>
//   Frontend-разработчик
// </span>
// , я посвящаю себя воплощению идей в инновационные веб-приложения.
// Ознакомьтесь с моими недавними{' '}
// <span style={{ color: '#ae08bc', animation: 'none' }}>проектами</span>{' '}
// и{' '}
// <span style={{ color: '#ae08bc', animation: 'none' }}>статьями</span>,
// которые демонстрируют мои навыки в Front-End разработке.{' '}
// <span>📍</span>
// </SubTitle>
