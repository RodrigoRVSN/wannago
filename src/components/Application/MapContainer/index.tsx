import { useState } from 'react';
import { Map } from '../Map';
import { ModalNewItem } from '../ModalNewItem';

export interface INewLocation {
  lng: number;
  lat: number;
}

export function MapContainer(): JSX.Element {
  const [coord, setCoord] = useState<INewLocation>({} as INewLocation);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpenModal(true)}>
        oi
      </button>
      <Map setCoord={setCoord} />
      <ModalNewItem openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
