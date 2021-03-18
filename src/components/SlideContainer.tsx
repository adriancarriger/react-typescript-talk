import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const SlideContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default SlideContainer;
