import { createContext, useContext, useState, type ReactNode } from "react";
import { konyvek, type KonyvTipus } from "../adat";

export type UjKonyvTipus = Omit<KonyvTipus, "id">;

interface KonyvContextValue {
  torles: (id: number) => void;
  konyvhozzaad: (konyv: UjKonyvTipus) => void;
  konyvLista: KonyvTipus[];
}

export const KonyvContext = createContext<KonyvContextValue | undefined>(
  undefined,
);

interface KonyvProviderProps {
  children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {
  const [konyvLista, setKonyvLista] = useState<KonyvTipus[]>(konyvek);
  function torles(id: number) {
    console.log(id);
    setKonyvLista((elozoLista) =>
      elozoLista.filter((konyv) => konyv.id !== id),
    );
  }
  return (
    <KonyvContext.Provider value={{ torles, konyvLista, konyvhozzaad }}>
      {children}
    </KonyvContext.Provider>
  );
  function konyvhozzaad(konyv: UjKonyvTipus) {
    const ujId = konyvLista.length > 0 ? Math.max(...konyvLista.map((k) => k.id)) + 1 : 1;
    const ujLista: KonyvTipus = { ...konyvLista};
    ujLista.push(...konyv, id: ujId);
    setKonyvLista(ujLista)
    
  }
}


export function useKonyvContext() {
  const context = useContext(KonyvContext);

  if (context === undefined) {
    throw new Error("Az App csak KonyvProvideren belül használható.");
  }
  return context;
}
