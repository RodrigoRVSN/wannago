import { Avatar } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import withSSRAuth from '../../utils/withSSRAuth';

export default function Dashboard(): JSX.Element {
  const { user } = useAuth();
  console.log(user);
  return (
    <Avatar
      sx={{ height: '5rem', width: '5rem' }}
      src={String(user?.photoURL)}
      alt="Person looking to a map"
    />
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
