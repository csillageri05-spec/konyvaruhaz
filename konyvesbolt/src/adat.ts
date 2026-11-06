export interface KonyvTipus {
  id: number;
  cim: string;
  szerzo: string;
  ar: number;
  darabszam: number;
}

export const konyvek: KonyvTipus[] = [
  {
    id: 1,
    cim: "A kő szívű ember",
    szerzo: "Kosztolányi Dezső",
    ar: 2990,
    darabszam: 5,
  },
  {
    id: 2,
    cim: "A tűz",
    szerzo: "Szőlősi László",
    ar: 3490,
    darabszam: 3,
  },
  {
    id: 3,
    cim: "A kék tenger",
    szerzo: "Józsa Márton",
    ar: 4190,
    darabszam: 2,
  },
  {
    id: 4,
    cim: "A sötét szív",
    szerzo: "Nagy János",
    ar: 3990,
    darabszam: 4,
  },
  {
    id: 5,
    cim: "A világ",
    szerzo: "Tóth János",
    ar: 3790,
    darabszam: 6,
  },
];
