import { useContext } from 'react';
import { ColorModeContext, IColorModeContext } from '../context/colorMode';

export default function useColorMode(): IColorModeContext {
  const mode = useContext(ColorModeContext);
  return mode;
}
