import React, { useState } from 'react';
import {
  AboutHeaderBox,
  AdminContainer,
  AdminHeaderBox,
  AdminMenyBurger,
  BlogsHeaderBox,
  BurgerContainer,
  BurgerHeaderMeny,
  BurgerNav,
  ButtonStyleBurger,
  EditAccount,
  GitHubIconsHeaderBox,
  HeaderBox,
  IconAdminContainer,
  ModalContainerBurger,
  ProjectsHeaderBox,
  ResumeHeaderBox,
  StyledButton,
  TextFieldContainerLoginBurger,
  TextFieldContainerPasswordBurger,
  TextFieldContainerPasswordLineBurger,
  TextFieldNameBurger,
  TextFieldPasswordBurger,
} from '../style-animation/StyledHeader';
import HomeHeader from '../header-navigation/HomeHeader';
import AboutHeader from '../header-navigation/AboutHeader';
import ProjectsHeader from '../header-navigation/ProjectsHeader';
import BlogsHeader from '../header-navigation/BlogsHeader';
import ResumeHeader from '../header-navigation/ResumeHeader';
import GitHubIconsHeader from '../header-navigation/GitHubIconsHeader';
import Button from '../../../../shared/UI/button/Button';
import Modal from '../../../../shared/UI/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';

const BurgerMeny = ({
  isVisibility,
  handleBurgerIsVisibilityTrue,
  handleBurgerIsVisibilityFalse,
  handleAdminIsvisibilityFalse,
  adminIsVisibility,
  handleAdminIsvisibilityToggle,
}) => {
  const { isAuth } = useSelector((state) => state.editProfile);
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
      console.log(isAuth);
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
      <BurgerContainer>
        <BurgerHeaderMeny
          isVisibility={isVisibility}
          onClick={handleBurgerIsVisibilityTrue}
        >
          {isVisibility ? (
            <p>
              <ion-icon name="close-outline"></ion-icon>
            </p>
          ) : (
            <p>
              <ion-icon name="menu-outline"></ion-icon>
            </p>
          )}
        </BurgerHeaderMeny>

        <BurgerNav isVisibility={isVisibility}>
          <HeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <HomeHeader className="homeHeader" />
          </HeaderBox>

          <AboutHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <AboutHeader />
          </AboutHeaderBox>

          <ProjectsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <ProjectsHeader />
          </ProjectsHeaderBox>

          <ResumeHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <ResumeHeader />
          </ResumeHeaderBox>

          <BlogsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <BlogsHeader />
          </BlogsHeaderBox>

          <GitHubIconsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <GitHubIconsHeader />
          </GitHubIconsHeaderBox>

          <AdminHeaderBox>
            <AdminContainer onClick={handleAdminIsvisibilityToggle}>
              <IconAdminContainer>
                <p>
                  <ion-icon name="settings-outline"></ion-icon>{' '}
                  <span>Admin</span>
                </p>
              </IconAdminContainer>
            </AdminContainer>

            {adminIsVisibility ? (
              <>
                <AdminMenyBurger>
                  <EditAccount>
                    <p className="accaunt" onClick={handleOpen}>
                      Редактировать аккаунт
                    </p>
                    <p className="tema">Смена темы</p>
                  </EditAccount>
                  <StyledButton onClick={handleAdminIsvisibilityFalse}>
                    Назад
                  </StyledButton>
                </AdminMenyBurger>
                <Modal open={open} onClose={handleClose}>
                  <ModalContainerBurger>
                    <form onSubmit={handleSubmit}>
                      <h2>Admin</h2>
                      {errors.name && (
                        <p style={{ color: 'red', marginBottom: 10 }}>
                          {errors.name}
                        </p>
                      )}

                      <TextFieldContainerLoginBurger>
                        <TextFieldNameBurger
                          value={name}
                          onChange={handleName}
                          label="login name"
                          error={!!errors.name}
                        />
                        <p>
                          <ion-icon name="person-outline"></ion-icon>
                        </p>
                      </TextFieldContainerLoginBurger>
                      {errors.password && (
                        <p style={{ color: 'red', marginBottom: 10 }}>
                          {errors.password}
                        </p>
                      )}

                      <TextFieldContainerPasswordBurger>
                        <TextFieldPasswordBurger
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={handlePassword}
                          label="password"
                          error={!!errors.password}
                        />
                        <p onClick={handleShowPassword}>
                          <ion-icon name="eye-outline"></ion-icon>
                        </p>
                        <TextFieldContainerPasswordLineBurger
                          showPasswordLine={showPassword}
                        />
                      </TextFieldContainerPasswordBurger>

                      <ButtonStyleBurger type="submit">Войти</ButtonStyleBurger>
                    </form>
                  </ModalContainerBurger>
                </Modal>
              </>
            ) : null}
          </AdminHeaderBox>

          <Button onClick={handleBurgerIsVisibilityFalse}>Назад</Button>
        </BurgerNav>
      </BurgerContainer>
    </>
  );
};

export default BurgerMeny;
