export type elementSetType = {
  elementPrefix: string;
  numberOfElements: number;

  forbiddenElements?: Array<number>;
  newTrashhold: number;
};

export type uniqueSetType = elementSetType & {
  setName: string;
  color?: string;
};

export const uniqueSets: uniqueSetType[] = [
  {
    elementPrefix: "Addamsovi_",
    numberOfElements: 1,
    setName: "Hrozivý dům rodiny Addamsovy",
    newTrashhold: 1,

    color: "tabory",
  },
  {
    elementPrefix: "Tajuplný-ostrov_",
    numberOfElements: 4,
    setName: "Tajuplný ostrov",
    newTrashhold: 1,

    color: "tabory",
  },
  {
    elementPrefix: "Plachetnice_",
    numberOfElements: 1,
    setName: "Stavba plachetnice",
    newTrashhold: 1,

    color: "kov",
  },
  {
    elementPrefix: "Vánoce_",
    numberOfElements: 1,
    setName: "Vánoce ve SFÉŘE",
    newTrashhold: 1,
  },
  {
    elementPrefix: "Venec_",
    numberOfElements: 1,
    setName: "Výrobky",
    newTrashhold: 1,
  },
];
