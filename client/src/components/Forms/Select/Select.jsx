import React, { useState } from "react";
import "./select.scss";

const data = [
  { value: "React", label: "React" },
  { value: "Vue", label: "Vue" },
  { value: "Angular", label: "Angular" },
  { value: "Node", label: "Node" },
  { value: "Redux", label: "Redux" },
];
const Select = ({ select, setSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClose = (name) => {
    setSelect(name);
    setIsOpen(false);
  };

  return (
    <div className={`select ${isOpen ? "active" : ""}`} onClick={onOpen}>
      <span className="fs-14">{select ? select : "Выберите категорию"}</span>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L6 6L1 1"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div className={`select-list ${isOpen ? "active" : ""}`}>
        {data.map((item, index) => (
          <span key={index} onClick={() => onClose(item.value)}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
