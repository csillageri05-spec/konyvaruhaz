import { useKonyvContext } from "../context/KonyvContext";
import KonyvSor from "./KonyvSor";

function KonyvTabla() {
  const { konyvLista } = useKonyvContext();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Azonosító</th>
            <th>Cím</th>
            <th>Szerző</th>
            <th>Ár</th>
            <th>Darabszám</th>
          </tr>
        </thead>
        <tbody>
          {konyvLista.map((konyv) => (
            <KonyvSor key={konyv.id} konyv={konyv} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default KonyvTabla;
