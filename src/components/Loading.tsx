import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.root} />;
};

export default Loading;
