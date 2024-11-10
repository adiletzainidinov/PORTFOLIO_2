import { Box, FormHelperText, TextField, Typography } from '@mui/material';
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
  const totalChars =
    inputValueMainText.length +
    inputValueMainTextSecond.length +
    inputValueMainTextThird.length +
    inputValueMainTextFour.length +
    inputValueMainTextFive.length +
    inputValueMainTextSix.length +
    inputValueMainTextSeven.length +
    Math.min(inputValueMainTextEight.length, 5);

  const remainingChars = 211 - totalChars;

  const getMaxLength = (inputLength, isEighth = false) =>
    isEighth
      ? Math.min(remainingChars + inputLength, 5)
      : Math.min(remainingChars + inputLength, 211);

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
            label="1) Белый текст"
            fullWidth
            value={inputValueMainText}
            onChange={(e) =>
              handleInputValueMainText(e, 'handleInputValueMainText')
            }
            error={totalChars !== 211}
            inputProps={{ maxLength: getMaxLength(inputValueMainText.length) }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="2) Фиолетовый"
            fullWidth
            value={inputValueMainTextSecond}
            onChange={(e) =>
              handleInputValueMainTextSecond(
                e,
                'handleInputValueMainTextSecond'
              )
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextSecond.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="3) Белый текст"
            fullWidth
            value={inputValueMainTextThird}
            onChange={(e) =>
              handleInputValueMainTextThird(e, 'handleInputValueMainTextThird')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextThird.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="4) Фиолетовый"
            fullWidth
            value={inputValueMainTextFour}
            onChange={(e) =>
              handleInputValueMainTextFour(e, 'handleInputValueMainTextFour')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextFour.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="5) Белый текст"
            fullWidth
            value={inputValueMainTextFive}
            onChange={(e) =>
              handleInputValueMainTextFive(e, 'handleInputValueMainTextFive')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextFive.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="6) Фиолетовый"
            fullWidth
            value={inputValueMainTextSix}
            onChange={(e) =>
              handleInputValueMainTextSix(e, 'handleInputValueMainTextSix')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextSix.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="7) Белый текст"
            fullWidth
            value={inputValueMainTextSeven}
            onChange={(e) =>
              handleInputValueMainTextSeven(e, 'handleInputValueMainTextSeven')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextSeven.length),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="8) Белый текст"
            fullWidth
            value={inputValueMainTextEight}
            onChange={(e) =>
              handleInputValueMainTextEight(e, 'handleInputValueMainTextEight')
            }
            error={totalChars !== 211}
            inputProps={{
              maxLength: getMaxLength(inputValueMainTextEight.length, true),
            }}
          />
        </Box>
        <FormHelperText
          sx={{ fontSize: 15, mt: 1, ml: 1, lineHeight: '20px' }}
          error
        >
          Общая длина всех полей должна составлять 211 символов.
        </FormHelperText>
        <Typography
          sx={{ ml: 1, fontSize: 22 }}
          color={totalChars !== 211 ? 'error' : 'textSecondary'}
        >
          Осталось символов: {remainingChars}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 3,
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <Button onClick={handleCloseMainText}>назад</Button>
          <Button disabled={totalChars !== 211} onClick={handleSubmitMainText}>
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
