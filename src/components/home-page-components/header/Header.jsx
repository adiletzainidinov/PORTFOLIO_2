import { useState, useEffect } from 'react';
import {
  HeaderContainer,
  HeaderNav,
  MainContainer,
} from './style-animation/StyledHeader';
import Logo from './burger-logo/Logo';
import BurgerMeny from './burger-logo/BurgerMeny';
import HeaderNavigation from './header-navigation/HeaderNavigation';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const [adminIsVisibility, setAdminIsVisibility] = useState(false);

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

  const handleAdminIsvisibilityFalse = () => {
    setAdminIsVisibility(false);
  };

  const handleAdminIsvisibilityTrue = () => {
    setAdminIsVisibility(true);
  };

  const handleAdminIsvisibilityToggle = () => {
    setAdminIsVisibility((prev) => !prev);
  };

  return (
    <MainContainer isSticky={isSticky}>
      <HeaderContainer isSticky={isSticky}>
        <HeaderNav isSticky={isSticky}>
          <Logo />

          <HeaderNavigation
            handleAdminIsvisibilityFalse={handleAdminIsvisibilityFalse}
            handleAdminIsvisibilityTrue={handleAdminIsvisibilityTrue}
            adminIsVisibility={adminIsVisibility}
            handleAdminIsvisibilityToggle={handleAdminIsvisibilityToggle}
          />

          <BurgerMeny
            isVisibility={isVisibility}
            handleBurgerIsVisibilityTrue={handleBurgerIsVisibilityTrue}
            handleBurgerIsVisibilityFalse={handleBurgerIsVisibilityFalse}
            handleAdminIsvisibilityFalse={handleAdminIsvisibilityFalse}
            handleAdminIsvisibilityTrue={handleAdminIsvisibilityTrue}
            adminIsVisibility={adminIsVisibility}
            handleAdminIsvisibilityToggle={handleAdminIsvisibilityToggle}
          />
        </HeaderNav>
      </HeaderContainer>
    </MainContainer>
  );
};

export default Header;
