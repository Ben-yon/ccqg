import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, FlagWidget, FlagOptions } from "./components";
import { countries } from "./countries";
import { randomizItems, imageURLPath } from "./utils";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(0);

  

  // useEffect()

  return (
    <BrowserRouter>
      <>
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
