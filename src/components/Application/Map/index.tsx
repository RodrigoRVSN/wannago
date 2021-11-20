import GoogleMapReact from 'google-map-react';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { INewLocation } from '../MapContainer';
import { db } from '../../../config/firebase';
import { IUser } from '../../../context/auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReactComponent = ({ lat, lng }: any): JSX.Element => (
  <div>
    <PersonPinCircleIcon style={{ color: '#556cd6' }} />
  </div>
);

interface IMap {
  setCoord: Dispatch<SetStateAction<INewLocation>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface IMarkers {
  id: string;
  company: string;
  coord: {
    lat: number;
    lng: number;
  };
  local: string;
  reasons: string;
  user: IUser;
}

export function Map({ setCoord, openModal, setOpenModal }: IMap): JSX.Element {
  const [markers, setMarkers] = useState<IMarkers[]>([]);

  const defaultProps = {
    center: {
      lat: -23.5489,
      lng: -46.6388,
    },
    zoom: 6,
  };

  async function getAllLocals(): Promise<void> {
    const citiesRef = db.collection('locals');
    const snapshot = await citiesRef.get();
    const locals = [] as unknown as IMarkers[];
    snapshot.forEach(doc => {
      const data = doc.data();
      locals.push({
        id: doc.id,
        company: data.company,
        coord: {
          lat: data.coord.lat,
          lng: data.coord.lng,
        },
        local: data.local,
        reasons: data.reasons,
        user: data.user,
      });
    });
    setMarkers(locals);
  }

  useEffect(() => {
    getAllLocals();
  }, [openModal]);

  function handleClickNewPoint(e: GoogleMapReact.ClickEventValue): void {
    setCoord({
      lat: e.lat,
      lng: e.lng,
    });
    setOpenModal(true);
  }

  return (
    <div
      style={{
        height: '80vh',
        width: '90vw',
      }}
    >
      <GoogleMapReact
        onClick={e => handleClickNewPoint(e)}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY ?? '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {markers?.map(info => (
          <ReactComponent lat={info.coord.lat} lng={info.coord.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
