import { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IconButton, makeStyles } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    width: '7em',
  },
}));

export interface SlideNavigationProps {
  totalRoutes: number;
}

const SlideNavigation = ({ totalRoutes }: SlideNavigationProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const base = useMemo(() => ['/slide/', '/example/'].find((base) => pathname.startsWith(base)), [
    pathname,
  ]);

  const current = useMemo(() => (base ? Number(pathname.split(base)[1]) : undefined), [
    base,
    pathname,
  ]);

  const history = useHistory();

  const navigate = useMemo(() => {
    if (!current) {
      return undefined;
    }

    const incrementSlide = (input: number) =>
      history.push(`${base}${current ? current + input : 1}`);

    return {
      previous: () => incrementSlide(-1),
      next: () => incrementSlide(1),
    };
  }, [current, history, base]);

  if (!current) {
    return null;
  }

  return (
    <div className={classes.root}>
      <IconButton disabled={!base || current <= 1} onClick={navigate?.previous}>
        <NavigateBefore />
      </IconButton>
      <IconButton disabled={!base || current >= totalRoutes} onClick={navigate?.next}>
        <NavigateNext />
      </IconButton>
    </div>
  );
};

export default SlideNavigation;
