import Head from 'next/head';
import MainContent from '../components/Home/MainContent';
import withSSRGuest from '../utils/withSSRGuest';

import { AvatarContainer, ContainerBox } from '../styles/HomeStyles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Início | WannaGo</title>
      </Head>
      <ContainerBox>
        <MainContent />
        <AvatarContainer src="/map.svg" alt="Person looking to a map" />
      </ContainerBox>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async () => ({
  props: {},
}));
