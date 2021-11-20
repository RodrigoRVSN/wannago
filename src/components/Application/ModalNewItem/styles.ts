import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: `#FFFFFF`,
    borderRadius: 15,
    padding: 30,
    boxShadow: `0 8px 8px -4px  black`,
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  logo: {
    width: '4rem',
    height: '4rem',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  local: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
}));

export { useStyles };
