import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emojiMap = { partyPopper: '🎉', partyFace: '🥳', balloon: '🎈' };

export interface ButtonProps extends MuiButtonProps {
  // extend the component by adding properties here
}

const MyAwesomeButton = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
);

const Example2 = () => (
  <div>
    <div>Extending Consuming third-part libraries</div>

    <MyAwesomeButton variant="contained" color="primary">
      My awesome button
    </MyAwesomeButton>
  </div>
);

export default Example2;
