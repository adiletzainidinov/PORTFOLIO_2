import React from 'react';
import {
  AdminContainer,
  AdminMeny,
  EditAccount,
  IconAdminContainer,
  StyledButton,
} from '../style-animation/StyledHeader';

const Admin = ({
  adminIsVisibility,
  handleAdminIsvisibilityFalse,
  handleAdminIsvisibilityToggle
}) => {
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
            <p className="accaunt">Редактировать аккаунт</p>
            <p className="tema">Смена темы</p>
          </EditAccount>
          <StyledButton onClick={handleAdminIsvisibilityFalse}>
            Назад
          </StyledButton>
        </AdminMeny>
      ) : null}
    </>
  );
};

export default Admin;
