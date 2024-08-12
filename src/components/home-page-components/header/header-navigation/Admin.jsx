import React, { useState } from 'react';
import {
  AdminContainer,
  AdminMeny,
  ButtonStyle,
  EditAccount,
  IconAdminContainer,
  ModalContainer,
  StyledButton,
  TextFieldContainerLogin,
  TextFieldContainerPassword,
  TextFieldContainerPasswordLine,
  TextFieldName,
  TextFieldPassword,
} from '../style-animation/StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../../store/slices/edit-profile-slice/editProfileSlice';
import Modal from '../../../../shared/UI/modal/Modal';

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
      console.log(isAuth,isLoading);
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
          <Modal open={open} onClose={handleClose}>
            <ModalContainer>
              <form onSubmit={handleSubmit}>
                <h2>Admin</h2>
                {errors.name && (
                  <p style={{ color: 'red', marginBottom: 10 }}>
                    {errors.name}
                  </p>
                )}

                <TextFieldContainerLogin>
                  <TextFieldName
                    value={name}
                    onChange={handleName}
                    label="login name"
                    error={!!errors.name}
                  />
                  <p>
                    <ion-icon name="person-outline"></ion-icon>
                  </p>
                </TextFieldContainerLogin>
                {errors.password && (
                  <p style={{ color: 'red', marginBottom: 10 }}>
                    {errors.password}
                  </p>
                )}

                <TextFieldContainerPassword>
                  <TextFieldPassword
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePassword}
                    label="password"
                    error={!!errors.password}
                  />
                  <p onClick={handleShowPassword}>
                    <ion-icon name="eye-outline"></ion-icon>
                  </p>
                  <TextFieldContainerPasswordLine
                    showPasswordLine={showPassword}
                  />
                </TextFieldContainerPassword>

                <ButtonStyle type="submit">Войти</ButtonStyle>
              </form>
            </ModalContainer>
          </Modal>
        </AdminMeny>
      ) : null}
    </>
  );
};

export default Admin;
