import PropTypes from 'prop-types';
import { FormHelperText, TextField, Typography } from '@mui/material';
import {
  ButtonAdd,
  ButtonBack,
  ButtonParents,
  TitleText,
} from '../StyleIntroductionCard';
import Modal from '../../../../shared/UI/modal/Modal';


const SubTitleModalWhoIam = ({
  handleCloseWhoIam,
  inputWhoIam,
  handleInputValueWhoIam,
  handleKeyPressWhoIam,
  errorWhoIam,
  handleSubminWhoIam,
  openWhoIam,
  inputWhoIamSecond,
}) => {
  return (
    <>
      <Modal open={openWhoIam} onClose={handleCloseWhoIam}>
        <TitleText>
          Пожалуйста, введите текст длиной ровно 21 символов:
        </TitleText>
        <TextField
          variant="outlined"
          label="text"
          fullWidth
          value={inputWhoIam}
          onChange={(e) => handleInputValueWhoIam(e, 'inputWhoIam')}
          onKeyPress={handleKeyPressWhoIam}
          error={inputWhoIam.length + inputWhoIamSecond.length !== 21}
          inputProps={{ maxLength: 1 }}
          sx={{mb: 2}}
        />
        <TextField
          variant="outlined"
          label="text"
          fullWidth
          value={inputWhoIamSecond}
          onChange={(e) => handleInputValueWhoIam(e, 'inputWhoIamSecond')}
          onKeyPress={handleKeyPressWhoIam}
          error={inputWhoIam.length + inputWhoIamSecond.length !== 21}
          inputProps={{ maxLength: 20 }}
        />
          {inputWhoIam.length !== 1 || inputWhoIamSecond.length !== 20 ? (
    <FormHelperText error>
      Общая длина обоих полей должна составлять 21 символ: 1 символ в первом поле и 20 символов во втором.
    </FormHelperText>
  ) : null}
        <Typography
          color={inputWhoIam.length + inputWhoIamSecond.length !== 21 ? 'error' : 'textSecondary'}
          >
          {errorWhoIam}
        </Typography>
        <ButtonParents>
          <ButtonBack onClick={handleCloseWhoIam}>Назад</ButtonBack>
          <ButtonAdd
            onClick={handleSubminWhoIam}
            disabled={inputWhoIam.length + inputWhoIamSecond.length !== 21}
          >
            Добавить
          </ButtonAdd>
        </ButtonParents>
      </Modal>
    </>
  );
};

SubTitleModalWhoIam.propTypes = {
  handleCloseWhoIam: PropTypes.func.isRequired,
  inputWhoIam: PropTypes.string.isRequired,
  inputWhoIamSecond: PropTypes.string.isRequired,
  handleInputValueWhoIam: PropTypes.func.isRequired,
  handleKeyPressWhoIam: PropTypes.func.isRequired,
  errorWhoIam: PropTypes.string,
  handleSubminWhoIam: PropTypes.func.isRequired,
  openWhoIam: PropTypes.bool.isRequired,
};

export default SubTitleModalWhoIam;


