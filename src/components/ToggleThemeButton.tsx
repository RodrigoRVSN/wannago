import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import useColorMode from '../hooks/useColorMode';

export default function ToggleThemeButton(): JSX.Element {
  const { colorMode, mode } = useColorMode();

  return (
    <IconButton
      style={{ marginLeft: 'auto', marginRight: 10 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
