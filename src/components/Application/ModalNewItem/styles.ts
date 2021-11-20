import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: `#FFFFFF`,
  borderRadius: 15,
  padding: 30,
  boxShadow: `0 8px 8px -4px  black`,
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
  },
}));

const Logo = styled(Avatar)(() => ({
  width: '4rem',
  height: '4rem',
}));
const Title = styled('h1')(() => ({
  fontFamily: 'Roboto',
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));

const Local = styled('h3')(() => ({
  fontFamily: 'Roboto',
  fontSize: '1.2rem',
  textAlign: 'center',
}));

const ButtonContainer = styled(Button)(() => ({
  marginTop: 20,
  padding: 10,
  width: '100%',
}));

export { ModalContainer, Logo, Title, Local, ButtonContainer };
