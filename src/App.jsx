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
        <div className="flex flex-col justify-center items-center">
            <FlagWidget
              countries={countries}
            />
          <FlagOptions countries={countries} />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
