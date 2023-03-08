import React from "react";

const Selects = ({ name, css, options, value, onchange}) => {
  return (
    <select
      name={name}
      className={css}
      onChange={onchange}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Selects;
