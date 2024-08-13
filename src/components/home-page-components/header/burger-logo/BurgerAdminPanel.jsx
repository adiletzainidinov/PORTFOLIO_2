import React from 'react';
import {
  AdminContainer,
  IconAdminContainer,
} from '../style-animation/StyledHeader';

const BurgerAdminPanel = ({ handleAdminIsvisibilityToggle }) => {
  return (
    <>
      <AdminContainer onClick={handleAdminIsvisibilityToggle}>
        <IconAdminContainer>
          <p>
            <ion-icon name="settings-outline"></ion-icon> <span>Admin</span>
          </p>
        </IconAdminContainer>
      </AdminContainer>
    </>
  );
};

export default BurgerAdminPanel;
