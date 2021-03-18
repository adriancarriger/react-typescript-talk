import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

const emojiMap = { partyPopper: '🎉', partyFace: '🥳', balloon: '🎈' };

const emojiEntries = Object.entries(emojiMap);
const randomEmoji = () => emojiEntries[Math.floor(Math.random() * emojiEntries.length)];

export interface ButtonProps extends MuiButtonProps {
  emoji: keyof typeof emojiMap | 'surpriseMe';
}

const MyAwesomeButton = ({ emoji, children, ...props }: ButtonProps) => (
  <Button {...props}>
    {children}
    {emoji && <> {emoji === 'surpriseMe' ? randomEmoji() : emojiMap[emoji]}</>}
  </Button>
);

const Example2 = () => (
  <div>
    <div>Extending Consuming third-part libraries</div>

    <MyAwesomeButton variant="contained" color="primary" emoji="surpriseMe">
      My awesome button
    </MyAwesomeButton>
  </div>
);

export default Example2;
