import { elementSetType } from "./elements";

export type facilityType = {
  name: string;
  nameEn: string;

  colorBgVarName: string;

  elementSet: elementSetType;
};

export const dilnaTextilu: facilityType = {
  name: "Dílna Textilu",
  nameEn: "Textiles Workshop",

  colorBgVarName: "textil",

  elementSet: {
    elementPrefix: "Textil_",
    numberOfElements: 26,
  },
};

export const dilnaGrafiky: facilityType = {
  name: "Dílna Grafiky",
  nameEn: "Graphics Workshop",

  colorBgVarName: "grafika",

  elementSet: {
    elementPrefix: "Grafika_",
    numberOfElements: 28,
  },
};

export const dilnaDreva: facilityType = {
  name: "Dílna Dřeva",
  nameEn: "Wood Workshop",

  colorBgVarName: "drevo",

  elementSet: {
    elementPrefix: "Drevo_",
    numberOfElements: 24,
  },
};

export const dilnaKovu: facilityType = {
  name: "Dílna Kovu/Elektra",
  nameEn: "Metal/Electricity Workshop",

  colorBgVarName: "kov",

  elementSet: {
    elementPrefix: "Kov Elektro_",
    numberOfElements: 27,
  },
};

export const laboratorITVR: facilityType = {
  name: "Laboratoř IT/VR",
  nameEn: "Computer Science/IT Lab",

  colorBgVarName: "it",

  elementSet: {
    elementPrefix: "IT_",
    numberOfElements: 29,
  },
};

export const laboratorFyziky: facilityType = {
  name: "Laboratoř Fyziky",
  nameEn: "Physics Lab",

  colorBgVarName: "fyzika",

  elementSet: {
    elementPrefix: "Fyzika_",
    numberOfElements: 25,
  },
};

export const laboratorChemie: facilityType = {
  name: "Laboratoř Chemie",
  nameEn: "Chemistry Lab",

  colorBgVarName: "chemie",

  elementSet: {
    elementPrefix: "Chemie_",
    numberOfElements: 28,
  },
};

export const laboratorPrirodopisu: facilityType = {
  name: "Laboratoř Přírodopisu",
  nameEn: "Biology Lab",

  colorBgVarName: "prirodopis",

  elementSet: {
    elementPrefix: "Priroda_",
    numberOfElements: 33,
  },
};
