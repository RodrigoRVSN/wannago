import { LinearProgress } from '@mui/material';

interface ILinearProgresBar {
  loading: boolean;
}

export default function LinearProgresBar({
  loading,
}: ILinearProgresBar): JSX.Element {
  return loading ? (
    <LinearProgress
      color="primary"
      style={{ width: '100vw', position: 'absolute', top: 0 }}
    />
  ) : (
    <div />
  );
}
