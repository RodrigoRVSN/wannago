import useAuth from '../../../hooks/useAuth';
import { ButtonContainer, Logo, LogoSocial, Main, Text } from './styles';

export default function MainContent(): JSX.Element {
  const { handleSignInGoogle } = useAuth();

  return (
    <Main>
      <Logo src="/logo.png" alt="Logo wannago" />
      <Text>
        No WannaGo você pode marcar os lugares nos quais você quer visitar, para
        dar aquela motivação!
      </Text>
      <ButtonContainer onClick={handleSignInGoogle} variant="contained">
        <LogoSocial src="/google_logo.png" alt="Logo Google" />
        Entrar com google
      </ButtonContainer>
    </Main>
  );
}
