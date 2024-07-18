import { useState, useEffect } from 'react';
import {
  BurgerHeaderMeny,
  HeaderContainer,
  HeaderNav,
  HeaderNavMain,
  MainContainer,
} from './StyledHeader';
import Logo from './Logo';
import HomeHeader from './HomeHeader';
import AboutHeader from './AboutHeader';
import ProjectsHeader from './ProjectsHeader';
import ResumeHeader from './ResumeHeader';
import BlogsHeader from './BlogsHeader';
import GitHubIconsHeader from './GitHubIconsHeader';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
          <BurgerHeaderMeny>
            <p><ion-icon name="menu-outline"></ion-icon></p>
          </BurgerHeaderMeny>
        </HeaderNav>
      </HeaderContainer>
    </MainContainer>
  );
};

export default Header;
