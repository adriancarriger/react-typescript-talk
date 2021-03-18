/**
 * 🎉 🥳 🎈 You can put a description of your function here
 * and it will show up for consumers when they hover.
 */
const addOne = (input: any) => {
  return input + 1;
};

const Example1 = () => (
  <ul>
    <li>Number: {addOne(3)}</li>
    <li>String: {addOne('3')}</li>
    <li>CSS unit: {addOne('3px')}</li>
  </ul>
);

export default Example1;
