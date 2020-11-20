import { useState } from "react";
import Slider from "./Components/Slider";

import data from "./data";

function App() {
  const [backgrounds, setBackgrounds] = useState(data);

  return (
    <div className="wrapper">
      <Slider slides={backgrounds}></Slider>
    </div>
  );
}

export default App;
