import React, { useState } from "react";

const Form = ({ setEmoji }) => {
  const [value, setValue] = useState("");
  const one = e  => {
    e.preventDefault();
    setEmoji(value);
    console.log(value);
  };
  return (
    <section className="form">
      <form onSubmit={one}>
        <input
          type="text"
          placeholder="Write here"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Form;
