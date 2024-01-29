import React, { ReactElement, useState } from "react";
import "./App.css";
import Description from "./description";

const Title = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const title: string = "hello";
  const subTitle:string= "world";
  return (
    <div className="App">
      {isVisible && <h1>{title}</h1>}
      <Description value={subTitle}/>
      <button onClick={() => setIsVisible(!isVisible)}>Click Me</button>
    </div>
  );
};

export default Title;
