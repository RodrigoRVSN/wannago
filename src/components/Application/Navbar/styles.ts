import { AppBar, Avatar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Header = styled(AppBar)(() => ({
  paddingTop: 10,
  paddingBottom: 10,
}));

const Container = styled(Toolbar)(({ theme }) => ({
  width: '1080px',
  margin: 'auto',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));

const AvatarContainer = styled(Avatar)(() => ({
  height: '3rem',
  width: '3rem',
  marginRight: 10,
}));

const UserInfo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export { Header, Container, AvatarContainer, UserInfo };
