import { useState } from "react";
import { useKonyvContext, type UjKonyvTipus } from "../context/KonyvContext";

function Urlap() {
  const { konyvhozzaad } = useKonyvContext();
  const [cim, setCim] = useState<string>("");
  const [szerzo, setSzerzo] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [darabszam, setDarabszam] = useState<number>(0);

  const Mentes = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ujKonyv: UjKonyvTipus = {
      cim,
      szerzo,
      ar,
      darabszam,
    };
    console.log(ujKonyv)
  };

  return (
    <form onSubmit={Mentes}>
      <div className="cim">
        <label>
          Cím:
          <input
            type="text"
            id="cim"
            name="cim"
            value={cim}
            onChange={(e) => setCim(e.target.value)}
          />
        </label>
      </div>
      <div className="szerzo">
        <label>
          Szerző:
          <input
            type="text"
            id="szerzo"
            name="szerzo"
            value={szerzo}
            onChange={(e) => setSzerzo(e.target.value)}
          />
        </label>
      </div>
      <div className="ar">
        <label>
          Ár:
          <input
            type="number"
            id="ar"
            name="ar"
            value={ar}
            onChange={(e) => setAr(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="darabszam">
        <label>
          Darabszám:
          <input
            type="number"
            id="darabszam"
            name="darabszam"
            value={darabszam}
            onChange={(e) => setDarabszam(Number(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Mentés</button>
    </form>
  );
}
export default Urlap;
