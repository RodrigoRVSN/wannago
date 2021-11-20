import { styled } from '@mui/material/styles';
import { Box, Stack, TextField } from '@mui/material';

const TooltipContainer = styled('div')(() => ({
  backgroundColor: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  gap: 8,
  borderRadius: 16,
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: `${theme.palette.secondary.main}`,
  color: '#FFFFFF',
  padding: 16,
  borderRadius: 16,
}));

const BodyContainer = styled(Stack)(() => ({
  alignItems: 'flex-start',
  padding: 16,
  justifyContent: 'space-between',
  color: '#FFFFFF',
  gap: 20,
}));

const Title = styled('span')(() => ({
  color: '#FFFFFF',
  fontSize: 16,
}));

const Subtitle = styled('span')(() => ({
  color: '#FFFFFF',
  fontSize: 12,
}));

const Local = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 12,
}));

const TextFieldContainer = styled(TextField)(() => ({
  width: '100%',
}));

export {
  TooltipContainer,
  BoxContainer,
  BodyContainer,
  Title,
  Subtitle,
  Local,
  TextFieldContainer,
};
