import { Modal, TextField } from '@mui/material';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { db } from '../../../config/firebase';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import LinearProgresBar from '../../LinearProgressBar';
import { INewLocation } from '../MapContainer';
import { ButtonContainer, Local, Logo, ModalContainer, Title } from './styles';

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
  const [company, setCompany] = useState('');
  const [reasons, setReasons] = useState('');
  const [local, setLocal] = useState();
  const [loading, setLoading] = useState(true);

  async function handleAddLocal(): Promise<void> {
    setLoading(true);
    db.collection('locals').doc(String(Math.random())).set({
      company,
      coord,
      local,
      reasons,
      user,
    });
    setLoading(false);
    setOpenModal(false);
    setCompany('');
    setReasons('');
  }

  const getLocation = useCallback(async () => {
    const response = await api.get(
      `/json?latlng=${coord.lat},${coord.lng}&sensor=true&key=${process.env.NEXT_PUBLIC_PLACES_KEY}`
    );
    const lenght = response.data.results.length;
    setLocal(response.data.results[lenght - 3]?.formatted_address);
    setLoading(false);
  }, [coord.lat, coord.lng]);

  useEffect(() => {
    if (openModal) {
      getLocation();
    } else {
      setCompany('');
      setReasons('');
    }
  }, [openModal, getLocation]);

  return openModal ? (
    <>
      <LinearProgresBar loading={loading} />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Logo src={String(user?.photoURL)} alt="Logo wannago" />
          <Title>Marcar novo lugar</Title>
          <Local>{local && local}</Local>
          <TextField
            value={company}
            onChange={e => setCompany(e.target.value)}
            label="Com quem?"
            style={{ width: '100%' }}
            placeholder="Diga para nós com quem você quer ir, ou se quer ir sozinho!"
            multiline
            rows={3}
            variant="standard"
          />
          <TextField
            value={reasons}
            onChange={e => setReasons(e.target.value)}
            label="Motivos"
            multiline
            rows={3}
            style={{ width: '100%' }}
            placeholder="Digite aqui o motivo para querer ir para esse lugar!"
            variant="standard"
          />
          <ButtonContainer
            disabled={!reasons || !company}
            variant="contained"
            onClick={() => handleAddLocal()}
          >
            Marcar novo lugar
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </>
  ) : (
    <div />
  );
}
