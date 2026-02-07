import juliab from "../assets/members/juliab.jpg";
import zuza from "../assets/members/zuza.jpg";
import andreea from "../assets/members/andreea.jpg";
import mark from "../assets/members/mark.jpg";
import zsofi from "../assets/members/zsofi.jpg";
import julias from "../assets/members/julias.jpg";
import bence from "../assets/members/bence.jpg";
import virag from "../assets/members/virag.jpg";
import reka from "../assets/members/reka.jpg";

export interface Members {
  name: string;
  role?: string;
  photoUrl?: string;
}

export const members: Members[] = [
  {
    name: "Julia Biskup",
    role: "President",
    photoUrl: juliab,
  },
  {
    name: "Reka Aghazi",
    role: "Events Lead",
    photoUrl: reka,
  },
  {
    name: "Julia Świerczyńska",
    role: "Finance Lead",
    photoUrl: julias,
  },
  {
    name: "Zuzanna Kramarz",
    role: "Marketing Lead",
    photoUrl: zuza,
  },
  {
    name: "Virág Lencse",
    role: "Event Coordinator",
    photoUrl: virag,
  },
  {
    name: "Maria Bordian",
    role: "Event Coordinator",
  },
  {
    name: "Amberley Drummond",
    role: "Event Coordinator",
  },
  {
    name: "Zsófi Sándor",
    role: "Finance Coordinator",
    photoUrl: zsofi,
  },
  {
    name: "Bence Balatoni",
    role: "Partners Coordinator",
    photoUrl: bence,
  },
  {
    name: "György Sólyom",
    role: "Partners Coordinator",
  },
  {
    name: "Andreea Vulpașu",
    role: "Marketing Coordinator",
    photoUrl: andreea,
  },
  {
    name: "Márk Antalóczy",
    role: "Marketing Coordinator",
    photoUrl: mark,
  },
];
