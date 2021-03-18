import { Link } from 'react-router-dom';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '6em',
    justifyContent: 'center',

    '& .MuiButtonBase-root': {
      fontSize: '3em',
      fontWeight: 400,
      borderColor: 'transparent',
      transition: 'all 0.3s',

      '&:hover': {
        borderColor: theme.palette.primary.main,
        background: theme.palette.primary.main,
        color: 'white',
      },
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <ButtonGroup
        className={classes.root}
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button component={Link} to="/slide/1">
          Slides
        </Button>
        <Button component={Link} to="/example/1">
          Examples
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Navigation;
