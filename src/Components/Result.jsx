import React from "react";
import emojiSend from "../helpers/emojiSend";
import Item from "./Item";

const Result = ({ emoji, darkMode }) => {
  const ArryUno = emojiSend(emoji);
  console.log(ArryUno);

  return (
    <section className="container results">
      {ArryUno &&  ArryUno.map((item) => (
          <Item key={item.title} title={item.title} emoji={item.symbol} darkMode={darkMode} />
        ))}
    </section>
  );
};

export default Result;
