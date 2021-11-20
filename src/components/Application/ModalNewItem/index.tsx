import {
  Modal,
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
} from '@mui/material';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import { INewLocation } from '../MapContainer';
import { useStyles } from './styles';

interface IModalNewItem {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  coord: INewLocation;
}

export function ModalNewItem({
  openModal,
  setOpenModal,
  coord,
}: IModalNewItem): JSX.Element {
  const { user } = useAuth();
  const classes = useStyles();
  const [company, setCompany] = useState('');
  const [reasons, setReasons] = useState('');
  const [local, setLocal] = useState();

  const getLocation = useCallback(async () => {
    const response = await api.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.lng}&sensor=true&key=${process.env.NEXT_PUBLIC_PLACES_KEY}`
    );
    const lenght = response.data.results.length;
    setLocal(response.data.results[lenght - 3]?.formatted_address);
  }, [coord.lat, coord.lng]);

  useEffect(() => {
    if (openModal) {
      getLocation();
    }
  }, [openModal, getLocation]);

  return openModal ? (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modalContainer}>
        <Avatar
          className={classes.logo}
          src={String(user?.photoURL)}
          alt="Logo wannago"
        />
        <Typography className={classes.title} variant="h1">
          Marcar novo lugar
        </Typography>
        <Typography className={classes.local} variant="h3">
          {local && local}
        </Typography>
        <TextField
          value={company}
          onChange={e => setCompany(e.target.value)}
          id="standard-textarea"
          label="Com quem?"
          style={{ width: '100%' }}
          placeholder="Diga para nós com quem você quer ir, ou se quer ir sozinho!"
          multiline
          variant="standard"
        />
        <TextField
          value={reasons}
          onChange={e => setReasons(e.target.value)}
          id="filled-multiline-static"
          label="Motivos"
          multiline
          rows={3}
          style={{ width: '100%' }}
          placeholder="Digite aqui o motivo para querer ir para esse lugar!"
          variant="standard"
        />
        <Button
          disabled={!reasons || !company}
          className={classes.button}
          variant="contained"
        >
          Marcar novo lugar
        </Button>
      </Box>
    </Modal>
  ) : (
    <div />
  );
}
