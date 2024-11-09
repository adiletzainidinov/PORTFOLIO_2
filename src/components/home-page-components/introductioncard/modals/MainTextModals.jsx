import { Box, TextField } from '@mui/material';
import Modal from '../../../../shared/UI/modal/Modal';
import { TitleText } from '../StyleIntroductionCard';
import PropTypes from 'prop-types';
import Button from '../../../../shared/UI/button/Button';

const MainTextModals = ({
  handleOpenMainText,
  handleCloseMainText,
  inputValueMainText,
  handleInputValueMainText,
  inputValueMainTextSecond,
  handleInputValueMainTextSecond,
  inputValueMainTextThird,
  handleInputValueMainTextThird,
  handleInputValueMainTextFour,
  inputValueMainTextFour,
  handleInputValueMainTextFive,
  inputValueMainTextFive,
  inputValueMainTextSix,
  handleInputValueMainTextSix,
  handleInputValueMainTextSeven,
  inputValueMainTextSeven,
  handleInputValueMainTextEight,
  inputValueMainTextEight,
  handleSubmitMainText,
}) => {
  return (
    <>
      <Modal open={handleOpenMainText} onClose={handleCloseMainText}>
        <TitleText>
          Введите ровно 211 символов: <u>Белый текст</u> — обычные поля,{' '}
          <u>Фиолетовый</u> — важные.
        </TitleText>

        <Box sx={{ maxHeight: 200, p: 1, overflowY: 'auto' }}>
          <TextField
            variant="outlined"
            label="Белый текст"
            fullWidth
            value={inputValueMainText}
            onChange={(e) => handleInputValueMainText(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Фиолетовый"
            fullWidth
            value={inputValueMainTextSecond}
            onChange={(e) => handleInputValueMainTextSecond(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Белый текст"
            fullWidth
            value={inputValueMainTextThird}
            onChange={(e) => handleInputValueMainTextThird(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Фиолетовый"
            fullWidth
            value={inputValueMainTextFour}
            onChange={(e) => handleInputValueMainTextFour(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Белый текст"
            fullWidth
            value={inputValueMainTextFive}
            onChange={(e) => handleInputValueMainTextFive(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Фиолетовый"
            fullWidth
            value={inputValueMainTextSix}
            onChange={(e) => handleInputValueMainTextSix(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Белый текст"
            fullWidth
            value={inputValueMainTextSeven}
            onChange={(e) => handleInputValueMainTextSeven(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="Белый текст"
            fullWidth
            value={inputValueMainTextEight}
            onChange={(e) => handleInputValueMainTextEight(e, 'inputWhoIam')}
            error={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            inputProps={{ maxLength: 211 }}
            sx={{ mb: 2 }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button onClick={handleCloseMainText}>назад</Button>
          <Button
            disabled={
              inputValueMainText.length +
                inputValueMainTextSecond.length +
                inputValueMainTextThird.length +
                inputValueMainTextFour.length +
                inputValueMainTextFive.length +
                inputValueMainTextSix.length +
                inputValueMainTextSeven.length +
                inputValueMainTextEight.length !==
              211
            }
            onClick={handleSubmitMainText()}
          >
            добавить
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default MainTextModals;

MainTextModals.propTypes = {
  handleCloseMainText: PropTypes.func.isRequired,
  handleOpenMainText: PropTypes.func.isRequired,
  inputValueMainText: PropTypes.string.isRequired,
  handleInputValueMainText: PropTypes.func.isRequired,
  inputValueMainTextSecond: PropTypes.string.isRequired,
  handleInputValueMainTextSecond: PropTypes.string.isRequired,
  handleInputValueMainTextThird: PropTypes.func.isRequired,
  inputValueMainTextThird: PropTypes.string.isRequired,
  inputValueMainTextFour: PropTypes.string.isRequired,
  handleInputValueMainTextFour: PropTypes.func.isRequired,
  inputValueMainTextFive: PropTypes.string.isRequired,
  handleInputValueMainTextFive: PropTypes.func.isRequired,
  handleInputValueMainTextSix: PropTypes.func.isRequired,
  inputValueMainTextSix: PropTypes.string.isRequired,
  handleInputValueMainTextSeven: PropTypes.func.isRequired,
  inputValueMainTextSeven: PropTypes.string.isRequired,
  handleInputValueMainTextEight: PropTypes.func.isRequired,
  inputValueMainTextEight: PropTypes.string.isRequired,
  handleSubmitMainText: PropTypes.func.isRequired,
};
