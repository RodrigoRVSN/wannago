import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Main = styled(Box)(({ theme }) => ({
  maxWidth: '25vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '55vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '75vw',
  },
}));

const Text = styled('p')(({ theme }) => ({
  textAlign: 'justify',
  fontSize: '1.5rem',
  fontFamily: 'Poppins',
  fontWeight: 700,
  marginBottom: theme.spacing(6),
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

export { Main, Text, ButtonContainer, Logo, LogoSocial };
