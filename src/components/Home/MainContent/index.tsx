import { makeStyles } from '@material-ui/core';
import { Button, Typography, Box, Avatar } from '@mui/material';
import Image from 'material-ui-image';
import useAuth from '../../../hooks/useAuth';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '30vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  logo: {
    width: '10rem',
    height: '10rem',
    marginBottom: theme.spacing(6),
  },
}));

export default function MainContent(): JSX.Element {
  const { handleSignInGoogle } = useAuth();

  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Image className={classes.logo} src="/logo.png" alt="Logo wannago" />
      <Typography className={classes.text}>
        No WannaGo você pode marcar os lugares nos quais você quer visitar, para
        dar aquela motivação!
      </Typography>
      <Button
        onClick={handleSignInGoogle}
        className={classes.button}
        variant="contained"
      >
        <Avatar src="/google_logo.png" alt="Logo Google" />
        Entrar com o google
      </Button>
    </Box>
  );
}
