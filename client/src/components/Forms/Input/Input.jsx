import React from "react";
import "./input.scss";

const Input = ({ placeholder, value, name, type = "text", onChange }) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field-label">
        {placeholder} <span>*</span>
      </div>

      <div className="field-input">
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
