import { makeStyles } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  switchContext: {
    position: 'fixed',
    bottom: '1rem',
    left: '1rem',
    color: 'lightgray',
  },
}));

export interface SwitchContextProps {
  flip?: boolean;
}

const SwitchContext = ({ flip }: SwitchContextProps) => {
  const classes = useStyles();

  return (
    <div className={classes.switchContext}>{flip ? <NavigateBefore /> : <NavigateNext />}</div>
  );
};

export default SwitchContext;
