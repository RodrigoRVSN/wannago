import { makeStyles } from '@material-ui/core';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    width: '1080px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  avatar: {
    height: '3rem',
    width: '3rem',
    marginRight: 10,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export function Navbar(): JSX.Element {
  const { user, handleSignOut } = useAuth();
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar variant="dense" className={classes.container}>
        <Box className={classes.userInfo}>
          <Avatar
            className={classes.avatar}
            src={String(user?.photoURL)}
            alt="Person looking to a map"
          />
          <Typography variant="h6" color="inherit" component="div">
            {user?.displayName}
          </Typography>
        </Box>
        <Button
          style={{ marginLeft: 'auto' }}
          variant="contained"
          color="secondary"
          onClick={handleSignOut}
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}
