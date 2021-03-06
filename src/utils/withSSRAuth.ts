import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

export default function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies['@wannago_token'];
    const pathname = ctx.resolvedUrl;

    if (token && pathname !== '/application') {
      return {
        redirect: {
          destination: '/application',
          permanent: false,
        },
      };
    }

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (error: any) {
      destroyCookie(undefined, '@wannago_token');

      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  };
}
