/* eslint-disable no-nested-ternary */
import Head from 'next/head';
import { toast } from 'react-toastify';
import MainContent from '../components/Home/MainContent';
import withSSRGuest from '../utils/withSSRGuest';

import { AvatarContainer, ContainerBox } from '../styles/HomeStyles';
import fire from '../config/firebase';

interface IHome {
  numberOfLocals: number;
}

export default function Home({ numberOfLocals }: IHome): JSX.Element {
  return (
    <>
      <Head>
        <title>Início | WannaGo</title>
      </Head>
      <ContainerBox>
        <MainContent numberOfLocals={numberOfLocals} />
        <AvatarContainer src="/map.svg" alt="Person looking to a map" />
      </ContainerBox>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async () => {
  let numberOfLocals;

  await fire
    .firestore()
    .collection('locals')
    .get()
    .then(local => {
      numberOfLocals = local.size;
    })
    .catch(err => {
      toast.error(err.message);
    });

  return {
    props: {
      numberOfLocals,
    },
  };
});
