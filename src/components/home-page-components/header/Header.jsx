import { useState, useEffect } from 'react';
import {
  BurgerHeaderMeny,
  BurgerNav,
  HeaderContainer,
  HeaderNav,
  HeaderNavMain,
  MainContainer,
  BurgerContainer,
  HeaderBox,
  AboutHeaderBox,
  ProjectsHeaderBox,
  ResumeHeaderBox,
  BlogsHeaderBox,
  GitHubIconsHeaderBox,
} from './StyledHeader';
import Logo from './Logo';
import HomeHeader from './HomeHeader';
import AboutHeader from './AboutHeader';
import ProjectsHeader from './ProjectsHeader';
import ResumeHeader from './ResumeHeader';
import BlogsHeader from './BlogsHeader';
import GitHubIconsHeader from './GitHubIconsHeader';
import Button from '../../../shared/UI/button/Button';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleBurgerIsVisibilityTrue = () => {
    setIsVisibility((prev) => !prev);
  };

  const handleBurgerIsVisibilityFalse = () => {
    setIsVisibility(false);
  };

  return (
    <MainContainer isSticky={isSticky}>
      <HeaderContainer isSticky={isSticky}>
        <HeaderNav isSticky={isSticky}>
          <Logo />

          <HeaderNavMain>
            <HomeHeader />

            <AboutHeader />

            <ProjectsHeader />

            <ResumeHeader />

            <BlogsHeader />

            <GitHubIconsHeader />
          </HeaderNavMain>

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

              <Button onClick={handleBurgerIsVisibilityFalse}>Назад</Button>
            </BurgerNav>
          </BurgerContainer>
        </HeaderNav>
      </HeaderContainer>
    </MainContainer>
  );
};

export default Header;
