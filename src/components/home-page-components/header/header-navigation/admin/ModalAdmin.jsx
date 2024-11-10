import Modal from '../../../../../shared/UI/modal/Modal';
import {
  ButtonStyle,
  ModalContainer,
  TextFieldContainerLogin,
  TextFieldContainerPassword,
  TextFieldContainerPasswordLine,
  TextFieldName,
  TextFieldPassword,
} from '../../style-animation/StyledHeader';

const ModalAdmin = ({
  open,
  handleClose,
  handleSubmit,
  errors,
  name,
  handleName,
  password,
  showPassword,
  handlePassword,
  handleShowPassword,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <form onSubmit={handleSubmit}>
            <h2>Admin</h2>
            {errors.name && (
              <p style={{ color: 'red', marginBottom: 10 }}>{errors.name}</p>
            )}

            <TextFieldContainerLogin>
              <TextFieldName
                value={name}
                onChange={handleName}
                label="login name"
                error={!!errors.name}
              />
              <p>
                <ion-icon name="person-outline"></ion-icon>
              </p>
            </TextFieldContainerLogin>
            {errors.password && (
              <p style={{ color: 'red', marginBottom: 10 }}>
                {errors.password}
              </p>
            )}

            <TextFieldContainerPassword>
              <TextFieldPassword
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePassword}
                label="password"
                error={!!errors.password}
              />
              <p onClick={handleShowPassword}>
                <ion-icon name="eye-outline"></ion-icon>
              </p>
              <TextFieldContainerPasswordLine showPasswordLine={showPassword} />
            </TextFieldContainerPassword>

            <ButtonStyle type="submit">Войти</ButtonStyle>
          </form>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalAdmin;
