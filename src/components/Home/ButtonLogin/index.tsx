import { CircularProgress, Box } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { ButtonContainer, LogoSocial } from './styles';

interface IButtonLogin {
  handleLogin: () => void;
  title: string;
  logo: string;
}

export default function ButtonLogin({
  handleLogin,
  title,
  logo,
}: IButtonLogin): JSX.Element {
  const { loading } = useAuth();

  return (
    <ButtonContainer
      disabled={loading}
      onClick={handleLogin}
      variant="contained"
    >
      <LogoSocial
        style={{ marginRight: 'auto' }}
        src={logo}
        alt="Logo Google"
      />
      {loading ? (
        <CircularProgress color="primary" style={{ marginRight: 'auto' }} />
      ) : (
        <Box style={{ marginRight: 'auto' }}>Entrar com {title}</Box>
      )}
    </ButtonContainer>
  );
}
