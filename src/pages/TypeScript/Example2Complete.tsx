export interface MyItem {
  inputs: number[];
  variant?: 'sumAllNumbers' | 'addToEachItem';
  amount?: number;
  someKey?: {
    anotherKey: string;
  };
}

const myItem: MyItem = { inputs: [2], amount: 2 };

myItem.inputs.push(3);

const Example2 = () => {
  return <pre>Result: {JSON.stringify(myItem, undefined, 2)}</pre>;
};

export default Example2;
