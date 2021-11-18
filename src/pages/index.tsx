import Head from 'next/head';
import { Avatar, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import MainContent from '../components/Home/MainContent';
import withSSRGuest from '../utils/withSSRGuest';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: theme.spacing(2),
    height: '100vh',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '20vh',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
      padding: '.5rem',
    },
  },
  avatar: {
    height: '40rem',
    width: '40rem',
    [theme.breakpoints.down('md')]: {
      height: '20rem',
      width: '20rem',
    },
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Início | WannaGo</title>
      </Head>
      <Box className={classes.container}>
        <MainContent />
        <Avatar
          className={classes.avatar}
          src="/map.svg"
          alt="Person looking to a map"
        />
      </Box>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async () => ({
  props: {},
}));
