export interface MyItem {}

const myItem: MyItem = {};

const Example2 = () => {
  return <pre>Result: {JSON.stringify(myItem, undefined, 2)}</pre>;
};

export default Example2;
