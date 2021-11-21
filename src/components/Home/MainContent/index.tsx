import { CircularProgress, Box } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import LinearProgresBar from '../../LinearProgressBar';
import ToggleThemeButton from '../../ToggleThemeButton';
import { ButtonContainer, Logo, LogoSocial, Main, Text } from './styles';

export default function MainContent(): JSX.Element {
  const { handleSignInGoogle, loading } = useAuth();

  return (
    <Main>
      <LinearProgresBar loading={loading} />
      <ToggleThemeButton />
      <Logo src="/logo.png" alt="Logo wannago" />

      <Text>
        No WannaGo você pode marcar os lugares nos quais você quer visitar, para
        dar aquela motivação!
      </Text>
      <ButtonContainer
        disabled={loading}
        onClick={handleSignInGoogle}
        variant="contained"
      >
        <LogoSocial
          style={{ marginRight: 'auto' }}
          src="/google_logo.png"
          alt="Logo Google"
        />
        {loading ? (
          <CircularProgress color="primary" style={{ marginRight: 'auto' }} />
        ) : (
          <Box style={{ marginRight: 'auto' }}>Entrar com google</Box>
        )}
      </ButtonContainer>
    </Main>
  );
}
