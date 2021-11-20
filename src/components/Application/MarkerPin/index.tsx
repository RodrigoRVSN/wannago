/* eslint-disable @typescript-eslint/no-unused-vars */
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { Tooltip } from '@mui/material';
import { memo } from 'react';
import { IMarkers } from '../../../@types/IMarkers';
import { ToolTip } from './ToolTip';

interface IMarkerProps {
  marker: IMarkers;
  lat: number;
  lng: number;
}

export const MarkerPinComponent = ({
  marker,
  lat,
  lng,
}: IMarkerProps): JSX.Element => {
  const toolTip = <ToolTip marker={marker} />;

  return (
    <Tooltip title={toolTip}>
      <PersonPinCircleIcon style={{ color: '#556cd6' }} />
    </Tooltip>
  );
};

export const MarkerPin = memo(MarkerPinComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.lat, nextProps.lat);
});
