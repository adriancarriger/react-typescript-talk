import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  titleArea: {
    textAlign: 'center',
    '& > *': {
      marginTop: '1em',
    },
  },
  imageContainer: {
    maxWidth: '80%',
    margin: '2em auto',
    display: 'flex',

    '& img': {
      maxWidth: '100%',
      maxHeight: '60vh',
      width: 'auto',
      height: 'auto',
      margin: '0 auto',
    },
  },
  videoContainer: {
    margin: '3em auto 0',
    display: 'flex',
    borderRadius: 3,
    border: '1px solid lightgray',
    maxWidth: '60%',
    overflow: 'hidden',

    '& video': {
      maxWidth: '100%',
      maxHeight: '60vh',
      width: 'auto',
      height: 'auto',
      margin: '0 auto',
    },
  },
  list: {
    margin: '8em auto 0',
    maxWidth: '80%',

    '& li': {
      ...theme.typography.h3,
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
}));

export interface SlideProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  video?: string;
  list?: React.ReactNode[];
}

const Slide: React.FC<SlideProps> = ({ title, subtitle, image, video, list, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleArea}>
        {title && <Typography variant="h1">{title}</Typography>}
        {subtitle && <Typography variant="h4">{subtitle}</Typography>}
      </div>
      {list && (
        <ul className={classes.list}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {image && (
        <div className={classes.imageContainer}>
          <img src={image} alt="header" />
        </div>
      )}
      {video && (
        <div className={classes.videoContainer}>
          <video autoPlay loop muted playsInline src={`/${video}.mp4`} />
        </div>
      )}

      {children}
    </div>
  );
};

export default Slide;
