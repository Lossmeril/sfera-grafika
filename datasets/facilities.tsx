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
    elementFolder: "Dílna Textilu/",
    numberOfElements: 45,
    newTrashhold: 25,
  },
};

export const dilnaGrafiky: facilityType = {
  name: "Dílna Grafiky",
  nameEn: "Graphics Workshop",

  colorBgVarName: "grafika",

  elementSet: {
    elementPrefix: "Grafika_",
    elementFolder: "Dílna Grafiky/",
    numberOfElements: 31,
    newTrashhold: 25,
  },
};

export const dilnaDreva: facilityType = {
  name: "Dílna Dřeva",
  nameEn: "Wood Workshop",

  colorBgVarName: "drevo",

  elementSet: {
    elementPrefix: "Dřevo_",
    elementFolder: "Dílna Dřeva/",
    numberOfElements: 31,
    newTrashhold: 24,
  },
};

export const dilnaKovu: facilityType = {
  name: "Dílna Kovu/Elektra",
  nameEn: "Metal/Electric Workshop",

  colorBgVarName: "kov",

  elementSet: {
    elementPrefix: "Kov Elektro_",
    elementFolder: "Dílna Kovu_Elektra/",
    numberOfElements: 33,
    newTrashhold: 25,
  },
};

export const laboratorITVR: facilityType = {
  name: "Laboratoř IT/VR",
  nameEn: "Computer Science/VR Lab",

  colorBgVarName: "it",

  elementSet: {
    elementPrefix: "IT VR_",
    elementFolder: "Laboratoř IT_VR/",
    numberOfElements: 35,
    forbiddenElements: [2, 8, 12, 15, 19, 20],
    newTrashhold: 25,
  },
};

export const laboratorFyziky: facilityType = {
  name: "Laboratoř Fyziky",
  nameEn: "Physics Lab",

  colorBgVarName: "fyzika",

  elementSet: {
    elementPrefix: "Fyzika_",
    elementFolder: "Laboratoř Fyziky_Robotiky/",
    numberOfElements: 30,
    newTrashhold: 25,
  },
};

export const laboratorChemie: facilityType = {
  name: "Laboratoř Chemie",
  nameEn: "Chemistry Lab",

  colorBgVarName: "chemie",

  elementSet: {
    elementPrefix: "Chemie_",
    elementFolder: "Laboratoř Chemie/",
    numberOfElements: 29,
    forbiddenElements: [15],
    newTrashhold: 25,
  },
};

export const laboratorPrirodopisu: facilityType = {
  name: "Laboratoř Přírodopisu",
  nameEn: "Biology Lab",

  colorBgVarName: "prirodopis",

  elementSet: {
    elementPrefix: "Přírodopis_",
    elementFolder: "Laboratoř Přírodopisu/",
    numberOfElements: 36,
    newTrashhold: 24,
  },
};

export const sferickeHriste: facilityType = {
  name: "Sférické Hřiště",
  nameEn: "Spherical Playground",

  colorBgVarName: "hriste",

  elementSet: {
    elementPrefix: "Hřiště_",
    elementFolder: "Sférické Hřiště/",
    numberOfElements: 30,
    newTrashhold: 25,
  },
};

export const scienceOnSphere: facilityType = {
  name: "Sál Science on a Sphere",
  nameEn: "Science on a Sphere Room",

  colorBgVarName: "sos",

  elementSet: {
    elementPrefix: "SOS_",
    elementFolder: "Sál Science on a Sphere/",
    numberOfElements: 27,
    newTrashhold: 24,
  },
};

export const primestskyTabor: facilityType = {
  name: "Příměstský Tábor",
  nameEn: "Day Camp",

  colorBgVarName: "tabory",

  elementSet: {
    elementPrefix: "",
    elementFolder: "",
    numberOfElements: 0,
    newTrashhold: 0,
  },
};

export const kreativniUceni: facilityType = {
  name: "Kreativní Učení",
  nameEn: "Creative Learning",

  colorBgVarName: "white",

  elementSet: {
    elementPrefix: "",
    elementFolder: "",
    numberOfElements: 0,
    newTrashhold: 0,
  },
};

export const eduLab: facilityType = {
  name: "AI EduLab @ SFÉRA",
  nameEn: "AI EduLab @ SFERA",

  colorBgVarName: "white",

  elementSet: {
    elementPrefix: "",
    elementFolder: "",
    numberOfElements: 0,
    newTrashhold: 0,
  },
};
