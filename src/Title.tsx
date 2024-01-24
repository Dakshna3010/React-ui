import React, { ReactElement, useState } from "react";
import "./App.css";

const Title = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);

  const buttonClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="App">
      {isVisible && <h1>Hello</h1>}
      <button onClick={buttonClick}>Click Me</button>
    </div>
  );
};

export default Title;

// {/* <div className="App">
//     <h1>Hello</h1>
//     <button onClick={}>CLICK ME</button>
//   </div> */}
