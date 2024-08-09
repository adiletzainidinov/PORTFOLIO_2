import React from 'react';
import {
  AboutHeaderBox,
  AdminContainer,
  AdminHeaderBox,
  AdminMeny,
  AdminMenyBurger,
  BlogsHeaderBox,
  BurgerContainer,
  BurgerHeaderMeny,
  BurgerNav,
  EditAccount,
  GitHubIconsHeaderBox,
  HeaderBox,
  IconAdminContainer,
  ProjectsHeaderBox,
  ResumeHeaderBox,
  StyledButton,
} from '../style-animation/StyledHeader';
import HomeHeader from '../header-navigation/HomeHeader';
import AboutHeader from '../header-navigation/AboutHeader';
import ProjectsHeader from '../header-navigation/ProjectsHeader';
import BlogsHeader from '../header-navigation/BlogsHeader';
import ResumeHeader from '../header-navigation/ResumeHeader';
import GitHubIconsHeader from '../header-navigation/GitHubIconsHeader';
import Admin from '../header-navigation/Admin';
import Button from '../../../../shared/UI/button/Button';
import { styled } from '@mui/material';

const BurgerMeny = ({
  isVisibility,
  handleBurgerIsVisibilityTrue,
  handleBurgerIsVisibilityFalse,
  handleAdminIsvisibilityFalse,
  handleAdminIsvisibilityTrue,
  adminIsVisibility,
  handleAdminIsvisibilityToggle
}) => {
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
              <AdminMenyBurger>
                <EditAccount>
                  <p className="accaunt">Редактировать аккаунт</p>
                  <p className="tema">Смена темы</p>
                </EditAccount>
                <StyledButton onClick={handleAdminIsvisibilityFalse}>
                  Назад
                </StyledButton>
              </AdminMenyBurger>
            ) : null}
          </AdminHeaderBox>

          <Button onClick={handleBurgerIsVisibilityFalse}>Назад</Button>
        </BurgerNav>
      </BurgerContainer>
    </>
  );
};

export default BurgerMeny;
