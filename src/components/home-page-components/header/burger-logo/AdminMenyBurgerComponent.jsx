import React from 'react'
import { AdminMenyBurger, EditAccount, StyledButton } from '../style-animation/StyledHeader'

const AdminMenyBurgerComponent = ({handleOpen,handleAdminIsvisibilityFalse}) => {
  return (
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
    </>
  )
}

export default AdminMenyBurgerComponent