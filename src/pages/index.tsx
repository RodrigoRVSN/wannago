import { GetServerSideProps } from 'next';
import Head from 'next/head';

import api from '../services/api';

interface IRequest {
  name: string;
}

interface IHomeProps {
  data: IRequest;
}

export default function Home({ data }: IHomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>
        Hello! Template made by
        <a
          target="_blank"
          href="https://github.com/RodrigoRVSN"
          rel="noreferrer"
        >
          {' '}
          {data && data.name}
        </a>
      </h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/hello');

  return {
    props: { data: response.data },
  };
};
