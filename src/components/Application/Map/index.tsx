import GoogleMapReact from 'google-map-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { INewLocation } from '../MapContainer';
import { db } from '../../../config/firebase';
import { MarkerPin } from '../MarkerPin';
import { IMarkers } from '../../../@types/IMarkers';
import LinearProgresBar from '../../LinearProgressBar';

interface IMap {
  setCoord: Dispatch<SetStateAction<INewLocation>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export function Map({ setCoord, openModal, setOpenModal }: IMap): JSX.Element {
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
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
    <>
      <LinearProgresBar loading={loading} />
      <div
        style={{
          height: '90vh',
          width: '95vw',
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
            <MarkerPin
              key={info.id}
              marker={info}
              lat={info.coord.lat}
              lng={info.coord.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
}
