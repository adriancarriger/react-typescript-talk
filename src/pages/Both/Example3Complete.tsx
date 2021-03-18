import { useState } from 'react';

type SelectProps<T> = {
  options: T[];
  value: T;
  onChange: (value: T) => void;
};

const Select = <T extends string | number>({ onChange, value, options }: SelectProps<T>) => (
  <select
    style={{ fontSize: '1em' }}
    value={value}
    onChange={(event) => {
      onChange(options[event.currentTarget.selectedIndex]);
    }}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

// const options = ['🎉', '🥳', '🎈'];
const options = [1, 2, 3, 4];

const Example3 = () => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <div>Generics with React Components</div>
      <div style={{ padding: '1em 0' }}>{JSON.stringify({ value })}</div>

      <Select options={options} value={value} onChange={setValue} />
    </div>
  );
};

export default Example3;
