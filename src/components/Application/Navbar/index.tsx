import { Button, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { AvatarContainer, Header, UserInfo, Container } from './styles';

export function Navbar(): JSX.Element {
  const { user, handleSignOut } = useAuth();

  return (
    <Header position="static">
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
          Sair
        </Button>
      </Container>
    </Header>
  );
}
