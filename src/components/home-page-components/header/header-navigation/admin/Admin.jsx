import React, { useState } from 'react';
import {
  AdminContainer,
  AdminMeny,
  EditAccount,
  IconAdminContainer,
  StyledButton,
} from '../../style-animation/StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../../../store/slices/edit-profile-slice/editProfileSlice';
import ModalAdmin from './ModalAdmin';

const Admin = ({
  adminIsVisibility,
  handleAdminIsvisibilityFalse,
  handleAdminIsvisibilityToggle,
}) => {
  const { isAuth } = useSelector((state) => state.editProfile);
  const { isLoading } = useSelector((state) => state.editProfile);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  console.log(`${isAuth} 'isAuth'`, `${isLoading} 'isLoading'`);

  const validate = () => {
    let tempErrors = {};
    if (!name) {
      tempErrors.name = 'Name is required';
    } else if (name !== 'Adilet') {
      tempErrors.name = 'Invalid username';
    }
    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password !== 'Admin') {
      tempErrors.password = 'Incorrect password';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      dispatch(signIn());
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      <AdminContainer onClick={handleAdminIsvisibilityToggle}>
        <IconAdminContainer>
          <p>
            <ion-icon name="settings-outline"></ion-icon> <span>Admin</span>
          </p>
        </IconAdminContainer>
      </AdminContainer>
      {adminIsVisibility ? (
        <AdminMeny>
          <EditAccount>
            <p className="accaunt" onClick={handleOpen}>
              Редактировать аккаунт
            </p>
            <p className="tema">Смена темы</p>
          </EditAccount>
          <StyledButton onClick={handleAdminIsvisibilityFalse}>
            Назад
          </StyledButton>
          <ModalAdmin
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            errors={errors}
            name={name}
            handleName={handleName}
            password={password}
            showPassword={showPassword}
            handlePassword={handlePassword}
            handleShowPassword={handleShowPassword}
          />
        </AdminMeny>
      ) : null}
    </>
  );
};

export default Admin;
