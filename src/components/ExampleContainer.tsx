import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1em',
    fontSize: '3em',

    '& ul': {
      margin: 0,
    },
  },
  file: {
    position: 'fixed',
    bottom: '2rem',
    margin: '0 auto',
    fontSize: '0.5rem',
    right: 0,
    left: 0,
    textAlign: 'center',
    color: 'gray',
  },
}));

export interface ExampleContainerProps {
  file: string;
  smallerFont?: boolean;
}

const ExampleContainer: React.FC<ExampleContainerProps> = ({ children, file, smallerFont }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.file}>{file}</div>
      <div style={smallerFont ? { fontSize: '1.5rem' } : undefined}>{children}</div>
    </div>
  );
};

export default ExampleContainer;
