import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';
import {
  ButtonAdd,
  ButtonBack,
  ButtonParents,
  TitleText,
} from '../StyleIntroductionCard';
import Modal from '../../../../shared/UI/modal/Modal';

const TitleModal = ({
  handleClose,
  input,
  handleInputValue,
  handleKeyPress,
  error,
  handleSubmin,
  open,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <TitleText>
          Пожалуйста, введите текст длиной ровно 25 символов:
        </TitleText>
        <TextField
          variant="outlined"
          label="text"
          fullWidth
          value={input}
          onChange={handleInputValue}
          onKeyPress={handleKeyPress}
          error={input.length !== 25}
          inputProps={{ maxLength: 25 }}
        />
        <Typography color={input.length !== 25 ? 'error' : 'textSecondary'}>
          {error}
        </Typography>
        <ButtonParents>
          <ButtonBack onClick={handleClose}>Назад</ButtonBack>
          <ButtonAdd onClick={handleSubmin} disabled={input.length !== 25}>
            Добавить
          </ButtonAdd>
        </ButtonParents>
      </Modal>
    </>
  );
};

TitleModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleInputValue: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmin: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default TitleModal;
