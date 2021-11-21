import { Avatar, Stack } from '@mui/material';
import {
  TooltipContainer,
  BoxContainer,
  Title,
  Subtitle,
  Local,
  BodyContainer,
  TextFieldContainer,
} from './styles';
import { IMarkers } from '../../../@types/IMarkers';

interface IToolTipProps {
  marker: IMarkers;
}

export const ToolTip = ({ marker }: IToolTipProps): JSX.Element => {
  return (
    <TooltipContainer>
      <BoxContainer>
        <Avatar src={String(marker.user.photoURL)} alt="Foto do usuário" />
        <Stack
          style={{
            justifyContent: 'flex-start',
            paddingLeft: 15,
          }}
        >
          <Title>{marker.user.displayName}</Title>
          <Subtitle>{marker.user.email}</Subtitle>
        </Stack>
      </BoxContainer>
      <BodyContainer>
        <Local>{marker.local}</Local>
        <TextFieldContainer
          disabled
          multiline
          label="Com quem"
          rows={3}
          defaultValue={marker.company}
        />
        <TextFieldContainer
          disabled
          multiline
          label="Motivos"
          rows={3}
          defaultValue={marker.reasons}
        />
      </BodyContainer>
    </TooltipContainer>
  );
};
