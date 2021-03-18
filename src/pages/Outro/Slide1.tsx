import Slide from 'components/Slide';

const Slide1 = () => (
  <Slide
    title="TypeScript FAQs"
    list={[
      'Will this require developers to write more code?',
      'Does this have a steep learning curve?',
      'Is there good third-party libary support?',
      'What if I have a very simple app?',
    ]}
  ></Slide>
);

export default Slide1;
