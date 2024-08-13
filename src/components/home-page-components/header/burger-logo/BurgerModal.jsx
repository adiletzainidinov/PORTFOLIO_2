import React from 'react';
import Modal from '../../../../shared/UI/modal/Modal';
import {
  ButtonStyleBurger,
  ModalContainerBurger,
  TextFieldContainerLoginBurger,
  TextFieldContainerPasswordBurger,
  TextFieldContainerPasswordLineBurger,
  TextFieldNameBurger,
  TextFieldPasswordBurger,
} from '../style-animation/StyledHeader';

const BurgerModal = ({
  handleClose,
  handleSubmit,
  handleName,
  showPassword,
  password,
  handlePassword,
  handleShowPassword,
  errors,
  name,
  open
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ModalContainerBurger>
          <form onSubmit={handleSubmit}>
            <h2>Admin</h2>
            {errors.name && (
              <p style={{ color: 'red', marginBottom: 10 }}>{errors.name}</p>
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
  );
};

export default BurgerModal;
