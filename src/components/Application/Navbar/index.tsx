import { Button, CircularProgress, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import LinearProgresBar from '../../LinearProgressBar';
import { AvatarContainer, Header, UserInfo, Container } from './styles';

export function Navbar(): JSX.Element {
  const { user, handleSignOut, loading } = useAuth();

  return (
    <Header position="static">
      <LinearProgresBar loading={loading} />
      <Container variant="dense">
        <UserInfo>
          <AvatarContainer
            src={String(user?.photoURL)}
            alt="Person looking to a map"
          />
          <Typography variant="h6" color="inherit" component="div">
            {user?.displayName}
          </Typography>
        </UserInfo>
        <Button
          style={{ marginLeft: 'auto' }}
          variant="contained"
          color="secondary"
          onClick={handleSignOut}
        >
          {loading ? <CircularProgress size={20} color="primary" /> : 'Sair'}
        </Button>
      </Container>
    </Header>
  );
}
