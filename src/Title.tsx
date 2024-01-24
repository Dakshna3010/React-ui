import React, { ReactElement, useState } from "react";
import "./App.css";

const Title = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <h1>Hello</h1>}
      <button onClick={() => setIsVisible(!isVisible)}>Click Me</button>
    </div>
  );
};

export default Title;
