import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, FlagWidget, FlagOptions } from "./components";
import { countries } from "./countries";
import { randomizItems, imageURLPath } from "./utils";
import Confetti from 'react-confetti';

import "./App.css";

function App() {
  const [answer, setAnswer] = useState(0);
  const [UIprops, SetUIprops] = useState({
    setConfetti: true
  })

  

  // useEffect()

  return (
    <BrowserRouter>
      <>
        {UIprops.setConfetti && <Confetti/>}
        <div>
          <Navbar />        
        </div>
        <div>
          <FlagWidget
            countries={countries}
          />
        </div>
        <div className="flex justify-center items-center ">
          <FlagOptions countries={countries} />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
