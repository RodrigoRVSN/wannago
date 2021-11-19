import Head from 'next/head';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { Navbar } from '../../components/Application/Navbar';
import { adminAuth } from '../../config/adminFirebase';
import useAuth from '../../hooks/useAuth';
import withSSRAuth from '../../utils/withSSRAuth';
import { Map } from '../../components/Application/Map';

interface IUserInfo {
  userInfo: firebase.default.User | null;
}

export default function Dashboard({ userInfo }: IUserInfo): JSX.Element {
  const { setUser } = useAuth();

  useEffect(() => {
    setUser(userInfo);
  }, [setUser, userInfo]);

  return (
    <>
      <Head>
        <title>Aplicação | WannaGo</title>
      </Head>
      <Navbar />
      <main
        style={{
          marginTop: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Map />
      </main>
    </>
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
