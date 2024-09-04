import {
  BoxFlex,
  LeftCardContainer,
  SocialMedia,
  StaticText,
  SubTitle,
  TitleContainer,
  TypingText,
  Github,
  ButtonBack,
  ButtonAdd,
  ButtonParents,
  TitleText,
} from './StyleIntroductionCard';
import LinkedinComponent from './Linkedin';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../shared/UI/modal/Modal';
import { useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import {
  aboutMeGet,
  aboutMeThunk,
} from '../../../store/slices/edit-profile-slice/editProfile.thunk';

const LeftCard = () => {
  const dispatch = useDispatch();
  const { isAuth, data } = useSelector((state) => state.editProfile);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [displayText, setDisplayText] = useState('Привет, я — Адилет (Ади).');

  useEffect(() => {
    dispatch(aboutMeGet());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      const lastItem = data[data.length - 1];
      setDisplayText(lastItem.text);
    }
  }, [data]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmin = () => {
    if (input.length === 25) {
      const data = {
        text: input,
      };
      dispatch(aboutMeThunk(data));
      setOpen(false);
      setInput('');
      setError('');
      setDisplayText(input); 
    } else {
      setError('Текст должен состоять ровно из 25 символов.');
    }
  };

  const handleInputValue = (e) => {
    const value = e.target.value;

    if (value.length <= 25) {
      setInput(value);

      if (value.length < 25) {
        setError(`Осталось символов: ${25 - value.length}`);
      } else {
        setError('Длина текста равна 25 символам.');
      }
    } else {
      setError('Превышен лимит символов!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.length === 25) {
      handleSubmin();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LeftCardContainer>
        <TitleContainer>
          <StaticText onClick={isAuth ? handleOpen : undefined} variant="h1">
            {displayText}
          </StaticText>
          <BoxFlex>
            <StaticText variant="h1" spaced>
              Я
            </StaticText>
            <TypingText variant="h1">Frontend-разработчик</TypingText>
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
      <Modal open={open} onClose={handleClose}>
        <TitleText>
          Пожалуйста, введите текст длиной ровно 25 символов:
        </TitleText>
        <TextField
          variant="outlined"
          label="text"
          fullWidth
          value={input}
          onChange={handleInputValue}
          onKeyPress={handleKeyPress}
          error={input.length !== 25}
          inputProps={{ maxLength: 25 }}
        />

        <Typography color={input.length !== 25 ? 'error' : 'textSecondary'}>
          {error}
        </Typography>
        <ButtonParents>
          <ButtonBack onClick={handleClose}>Назад</ButtonBack>
          <ButtonAdd onClick={handleSubmin} disabled={input.length !== 25}>
            Добавить
          </ButtonAdd>
        </ButtonParents>
      </Modal>
    </>
  );
};

export default LeftCard
