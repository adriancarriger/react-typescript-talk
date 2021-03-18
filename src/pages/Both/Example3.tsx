import { useState } from 'react';

type SelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ onChange, value, options }: SelectProps) => (
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

const options = ['🎉', '🥳', '🎈'];

const Example3 = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div>Generics with React Components</div>
      <div style={{ padding: '1em 0' }}>{JSON.stringify({ value })}</div>

      <Select options={options} value={value} onChange={setValue} />
    </div>
  );
};

export default Example3;
