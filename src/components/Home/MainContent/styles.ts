import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { appearFromTop } from '../../../styles/Animations';

const Main = styled(Box)(({ theme }) => ({
  maxWidth: '25vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  animation: `${appearFromTop} 0.5s ease-in`,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '55vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '75vw',
  },
}));

const Text = styled('h2')(({ theme }) => ({
  textAlign: 'justify',
  fontSize: '1.5rem',
  fontFamily: 'Poppins',
  fontWeight: 700,
  marginBottom: theme.spacing(6),
}));

const TextNumberContainer = styled('h3')(() => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginRight: 'auto',
}));

const TextNumber = styled('h3')(() => ({
  fontSize: '1.2rem',
  fontFamily: 'Poppins',
  fontWeight: 500,
  textAlign: 'left',
  alignItems: 'center',
}));

const ButtonContainer = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '2rem',
  fontFamily: 'Poppins',
  fontSize: '1.1rem',
  borderRadius: '1.1rem',
  [theme.breakpoints.down('sm')]: {
    height: '6rem',
  },
}));

const Logo = styled(Avatar)(({ theme }) => ({
  width: '10rem',
  height: '10rem',
  marginBottom: theme.spacing(6),
  borderRadius: 0,
}));

const LogoSocial = styled(Avatar)(() => ({
  width: '2.5rem',
  height: '2.5rem',
}));

export {
  Main,
  Text,
  TextNumberContainer,
  TextNumber,
  ButtonContainer,
  Logo,
  LogoSocial,
};
