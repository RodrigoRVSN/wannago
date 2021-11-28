import { keyframes } from '@mui/system';

export const appearFromTop = keyframes`
  from{
    opacity: 0.1;
    transform: translateY(-10rem);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const appearFromRight = keyframes`
  from{
    opacity: 0.1;
    transform: translateX(10rem);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;
