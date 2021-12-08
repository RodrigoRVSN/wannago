import { Info } from '@mui/icons-material';
import { Stack } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import LinearProgresBar from '../../LinearProgressBar';
import ToggleThemeButton from '../../ToggleThemeButton';
import ButtonLogin from '../ButtonLogin';
import { Logo, Main, Text, TextNumberContainer, TextNumber } from './styles';

interface IMain {
  numberOfLocals: number;
}

export default function MainContent({ numberOfLocals }: IMain): JSX.Element {
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
      <Stack
        style={{
          gap: 20,
          width: '100%',
        }}
      >
        <ButtonLogin
          handleLogin={handleSignInGoogle}
          title="Google"
          logo="/google_logo.png"
        />
      </Stack>

      <TextNumberContainer>
        <Info />
        <TextNumber>
          {numberOfLocals > 0
            ? `${numberOfLocals} marcações até agora!`
            : ' Seja o primeiro a marcar um lugar!'}
        </TextNumber>
      </TextNumberContainer>
    </Main>
  );
}
