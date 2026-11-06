import { useState } from "react";
import KonyvTabla from "./components/KonyvTabla";

import "./App.css";
import Urlap from "./components/Urlap";

function App() {
  const [] = useState(0);

  return (
    <>
      <header>
        <h1>Könyvesbolt admin felület</h1>
      </header>
      <Urlap />
      <KonyvTabla />
      <footer>&copy;Csillag Gergő Zsolt</footer>
    </>
  );
}

export default App;
