import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: theme.spacing(2),
  height: '100vh',
  padding: '2rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '20vh',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '20vh',
    padding: '.5rem',
  },
}));

const AvatarContainer = styled(Avatar)(({ theme }) => ({
  height: '40rem',
  width: '40rem',
  [theme.breakpoints.down('xl')]: {
    height: '30rem',
    width: '30rem',
  },
  [theme.breakpoints.down('lg')]: {
    height: '20rem',
    width: '20rem',
  },
}));

export { ContainerBox, AvatarContainer };
