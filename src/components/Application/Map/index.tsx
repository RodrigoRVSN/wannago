import GoogleMapReact from 'google-map-react';

import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReactComponent = ({ lat, lng }: any): JSX.Element => (
  <div>
    <PersonPinCircleIcon style={{ color: '#556cd6' }} />
  </div>
);

export function Map(): JSX.Element {
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
      lat: -21.5489,
      lng: -44.6388,
    },
  ];

  return (
    <div
      style={{
        height: '80vh',
        width: '90vw',
      }}
    >
      <GoogleMapReact
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
