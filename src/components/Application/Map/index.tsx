import GoogleMapReact from 'google-map-react';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { Dispatch, SetStateAction } from 'react';
import { INewLocation } from '../MapContainer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReactComponent = ({ lat, lng }: any): JSX.Element => (
  <div>
    <PersonPinCircleIcon style={{ color: '#556cd6' }} />
  </div>
);

interface IMap {
  setCoord: Dispatch<SetStateAction<INewLocation>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export function Map({ setCoord, setOpenModal }: IMap): JSX.Element {
  const defaultProps = {
    center: {
      lat: -23.5489,
      lng: -46.6388,
    },
    zoom: 6,
  };

  const markers = [
    {
      lat: -23.5489,
      lng: -46.6388,
    },
    {
      lat: -20.5489,
      lng: -42.6388,
    },
    {
      lat: -23.28333,
      lng: -47.67222,
    },
  ];

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
        {markers.map(info => (
          <ReactComponent lat={info.lat} lng={info.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
