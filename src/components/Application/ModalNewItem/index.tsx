import { makeStyles } from '@material-ui/core';
import { Modal, Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface IModalNewItem {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles(theme => ({
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: `#556cd6`,
  },
}));

export function ModalNewItem({
  openModal,
  setOpenModal,
}: IModalNewItem): JSX.Element {
  const classes = useStyles();
  return openModal ? (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modalContainer}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  ) : (
    <div />
  );
}
