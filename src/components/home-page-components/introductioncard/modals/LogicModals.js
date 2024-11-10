// Title Modal about

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  aboutMeGet,
  aboutMeThunk,
  whoIAmGet,
  whoIAmPost,
} from '../../../../store/slices/edit-profile-slice/editProfile.thunk';

export const TitleModalLogic = () => {
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmin = () => {
    if (input.length === 25) {
      const newData = { text: input };
      dispatch(aboutMeThunk(newData));
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
      setError(
        value.length < 25
          ? `Осталось символов: ${25 - value.length}`
          : 'Длина текста равна 25 символам.'
      );
    } else {
      setError('Превышен лимит символов!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.length === 25) {
      handleSubmin();
    }
  };

  return {
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
  };
};

// SubTitle Modal Who I am

export const TitleModalLogicWhoIam = () => {
  const dispatch = useDispatch();
  const isAuthWhoIam = useSelector((state) => state.editProfile.isAuth);
  const dataWhoIam = useSelector((state) => state.editProfile.whoIAm);
  const [openWhoIam, setOpenWhoIam] = useState(false);
  const [inputWhoIam, setInputWhoIam] = useState('');
  const [inputWhoIamSecond, setInputWhoIamSecond] = useState('');
  const [errorWhoIam, setErrorWhoIam] = useState('');
  const [displayTextWhoIam, setDisplayTextWhoIam] = useState('Я');
  const [displayTextWhoIamSecond, setDisplayTextWhoIamSecond] = useState('Frontend-разработчик');


  useEffect(() => {
    dispatch(whoIAmGet());
  }, [dispatch]);

  useEffect(() => {
    if (dataWhoIam.length > 0) {
      const lastItem = dataWhoIam[dataWhoIam.length - 1];
      setDisplayTextWhoIam(lastItem.title || 'Я')
      setDisplayTextWhoIamSecond(lastItem.subTitle || 'Frontend-разработчик');
    }
  }, [dataWhoIam]);

  const handleOpenWhoIam = () => setOpenWhoIam(true);
  const handleCloseWhoIam = () => setOpenWhoIam(false);

  const 
  handleSubminWhoIam = () => {
    if (inputWhoIam.length + inputWhoIamSecond.length === 21) {
      const newData = { title: inputWhoIam, subTitle: inputWhoIamSecond };
      dispatch(whoIAmPost(newData));
      setOpenWhoIam(false);
      setInputWhoIam('');
      setInputWhoIamSecond('');
      setErrorWhoIam('');
      setDisplayTextWhoIam(inputWhoIam);
      setDisplayTextWhoIamSecond(inputWhoIamSecond);
    } else {
      setErrorWhoIam('Общая длина текста должна быть ровно 21 символ.');
    }
  };

  const handleInputValueWhoIam = (e, inputName) => {
    const value = e.target.value;
  
    if (inputName === 'inputWhoIam') {
      setInputWhoIam(value);
    } else if (inputName === 'inputWhoIamSecond') {
      setInputWhoIamSecond(value);
    }
  
    const newInputWhoIam = inputName === 'inputWhoIam' ? value : inputWhoIam;
    const newInputWhoIamSecond = inputName === 'inputWhoIamSecond' ? value : inputWhoIamSecond;
  
    const totalLength = newInputWhoIam.length + newInputWhoIamSecond.length;
    setErrorWhoIam(
      totalLength < 21
        ? `Осталось символов: ${21 - totalLength}`
        : totalLength === 21
        ? ''
        : 'Превышен лимит символов!'
    );
  };
  
  const handleKeyPressWhoIam = (e) => {
    if (e.key === 'Enter' && inputWhoIam.length + inputWhoIamSecond.length === 21) {
      handleSubminWhoIam();
    }
  };

  return {
    isAuthWhoIam,
    openWhoIam,
    inputWhoIam,
    inputWhoIamSecond,
    errorWhoIam,
    displayTextWhoIam,
    displayTextWhoIamSecond,
    handleOpenWhoIam,
    handleCloseWhoIam,
    handleInputValueWhoIam,
    handleKeyPressWhoIam,
    handleSubminWhoIam
  };
};

// MainTextModal Logic

