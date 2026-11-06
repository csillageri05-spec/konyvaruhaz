import type { KonyvTipus } from "../adat";
import { useKonyvContext } from "../context/KonyvContext";

interface KonyvSorProps {
  konyv: KonyvTipus;
}

function KonyvSor({ konyv }: KonyvSorProps) {
  const { torles } = useKonyvContext();
  return (
    <tr className="KonyvAdatok">
      <td>{konyv.id}</td>
      <td>{konyv.cim}</td>
      <td>{konyv.szerzo}</td>
      <td>{konyv.ar}Ft</td>
      <td>{konyv.darabszam}db</td>
      <td>
        <button onClick={() => torles(konyv.id)}>Törlés</button>
      </td>
    </tr>
  );
}
export default KonyvSor;
