import React, { useState } from "react";

const Form = ({ setEmoji, modeDark, darkMode }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const one = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return
    }
    setEmoji(value);
    console.log(value);
  };

  const dos = () => {
      setEmoji('')
    }
 
  

  return (
    <section className={`form ${darkMode?"dark-mode":""}`}>
      <form onSubmit={one}>
        <input
          type="text"
          placeholder="Write here"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={dos}>All</button>
        <div className="toggle-box" onClick={modeDark} >
          <div className="toggle-circle"></div>
        </div>
      </form>
      {error && <p className="error">Enter search</p>}
    </section>
  );
};

export default Form;
