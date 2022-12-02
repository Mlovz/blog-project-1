import React from "react";
import "./form.scss";

const Form = ({ onSubmit, children }) => {
  return (
    <form noValidate onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
