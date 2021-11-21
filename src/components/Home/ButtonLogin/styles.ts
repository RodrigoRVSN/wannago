import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const LogoSocial = styled(Avatar)(() => ({
  width: '2.5rem',
  height: '2.5rem',
}));

export { ButtonContainer, LogoSocial };
