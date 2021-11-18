import { makeStyles } from '@material-ui/core';
import { Button, Typography, Box, Avatar } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '25vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      maxWidth: '55vw',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '75vw',
    },
  },
  text: {
    textAlign: 'justify',
    fontSize: '1.5rem',
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginBottom: theme.spacing(6),
  },
  button: {
    width: '100%',
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '2rem',
    fontSize: '1.1rem',
    borderRadius: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      height: '6rem',
    },
  },
  logo: {
    width: '10rem',
    height: '10rem',
    marginBottom: theme.spacing(6),
    borderRadius: 0,
  },
  logo_social: {
    width: '2.5rem',
    height: '2.5rem',
  },
}));

export default function MainContent(): JSX.Element {
  const { handleSignInGoogle } = useAuth();

  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Avatar className={classes.logo} src="/logo.png" alt="Logo wannago" />
      <Typography className={classes.text}>
        No WannaGo você pode marcar os lugares nos quais você quer visitar, para
        dar aquela motivação!
      </Typography>
      <Button
        onClick={handleSignInGoogle}
        className={classes.button}
        variant="contained"
      >
        <Avatar
          className={classes.logo_social}
          src="/google_logo.png"
          alt="Logo Google"
        />
        Entrar com google
      </Button>
    </Box>
  );
}
