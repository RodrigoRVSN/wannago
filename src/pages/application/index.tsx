import { Avatar } from '@mui/material';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { adminAuth } from '../../config/adminFirebase';
import useAuth from '../../hooks/useAuth';
import withSSRAuth from '../../utils/withSSRAuth';

interface IUserInfo {
  userInfo: firebase.default.User | null;
}

export default function Dashboard({ userInfo }: IUserInfo): JSX.Element {
  const { user, setUser } = useAuth();

  useEffect(() => {
    setUser(userInfo);
  }, [setUser, userInfo]);

  return (
    <Avatar
      sx={{ height: '5rem', width: '5rem' }}
      src={String(user?.photoURL)}
      alt="Person looking to a map"
    />
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const cookies = parseCookies(ctx);
  const token = cookies['@wannago_token'];

  let userInfo;
  if (token) {
    await adminAuth.verifyIdToken(token).then(res => {
      const dataFormatted = {
        email: res.email,
        photoURL: res.picture,
        displayName: res.name,
        uid: res.uid,
      };
      userInfo = dataFormatted;
    });
  }

  return {
    props: { userInfo },
  };
});
