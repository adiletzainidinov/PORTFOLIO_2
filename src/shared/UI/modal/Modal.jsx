import * as React from 'react';
import Box from '@mui/material/Box';
import { Modal as ModalMui } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: 'black',
  border: 'none',
  '@media (max-width: 600px)': {
    width: '80%',
  },

};

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <ModalMui
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </ModalMui>
    </>
  );
};

export default Modal;
