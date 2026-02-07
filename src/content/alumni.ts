import nikita from "../assets/alumni/nikita.jpg";
import laura from "../assets/alumni/laura.jpg";
import panna from "../assets/alumni/panna.jpg";
import bori from "../assets/alumni/bori.jpg";
import roman from "../assets/alumni/roman.jpg";
import olga from "../assets/alumni/olga.jpg";

export interface Alumni {
  name: string;
  photoUrl?: string;
}

export const alumni: Alumni[] = [
  {
    name: "Nikita Maslennikov",
    photoUrl: nikita,
  },
  {
    name: "Laura Kóder",
    photoUrl: laura,
  },
  {
    name: "Panna Leitner",
    photoUrl: panna,
  },
  {
    name: "Borbála Eszter Vizi",
    photoUrl: bori,
  },
  {
    name: "Roman Švarc",
    photoUrl: roman,
  },
  {
    name: "Olga Szczotka",
    photoUrl: olga,
  },
];
