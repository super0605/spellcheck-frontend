import React from "react";

interface SelectBoxProps {
  onChange: (value: string) => void;
}

const options = [
  { name: "Search by clicking", value: "yes" },
  { name: "Search with realtime", value: "no" },
];

const SelectBox = ({ onChange }: SelectBoxProps) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="select-box-wrapper">
      <label htmlFor="standard-select">Select Search Mode</label>
      <div className="select">
        <select
          id="standard-select"
          onChange={(e) => handleChange(e)}
          value={selectedOption}
        >
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default SelectBox;
