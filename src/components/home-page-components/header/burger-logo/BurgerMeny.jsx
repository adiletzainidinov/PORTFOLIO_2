import React, { useState } from 'react';
import {
  AdminHeaderBox,
  BurgerContainer,
  BurgerNav,
} from '../style-animation/StyledHeader';
import Button from '../../../../shared/UI/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../../store/slices/edit-profile-slice/editProfileSlice';
import BurgerModal from './BurgerModal';
import AdminMenyBurgerComponent from './AdminMenyBurgerComponent';
import BurgerAdminPanel from './BurgerAdminPanel';
import NavigateBurger from './NavigateBurger';
import CloseMenyOutlineBurger from './CloseMenyOutlineBurger';

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
        <CloseMenyOutlineBurger
          isVisibility={isVisibility}
          handleBurgerIsVisibilityTrue={handleBurgerIsVisibilityTrue}
        />

        <BurgerNav isVisibility={isVisibility}>
          <NavigateBurger
            handleBurgerIsVisibilityFalse={handleBurgerIsVisibilityFalse}
          />
          <AdminHeaderBox>
            <BurgerAdminPanel
              handleAdminIsvisibilityToggle={handleAdminIsvisibilityToggle}
            />

            {adminIsVisibility ? (
              <>
                <AdminMenyBurgerComponent
                  handleOpen={handleOpen}
                  handleAdminIsvisibilityFalse={handleAdminIsvisibilityFalse}
                />
                <BurgerModal
                  handleClose={handleClose}
                  handleSubmit={handleSubmit}
                  handleName={handleName}
                  showPassword={showPassword}
                  password={password}
                  handlePassword={handlePassword}
                  handleShowPassword={handleShowPassword}
                  errors={errors}
                  name={name}
                  open={open}
                />
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
