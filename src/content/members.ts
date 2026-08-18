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
  linkedin?: string;
}

export const members: Members[] = [
  {
    name: "Julia Biskup",
    role: "President",
    photoUrl: juliab,
    linkedin: "https://www.linkedin.com/in/jbiskup/",
  },
  {
    name: "Reka Aghazi",
    role: "Events Lead",
    photoUrl: reka,
    linkedin: "https://www.linkedin.com/in/reka-aghazi-767992299/",
  },
  {
    name: "Julia Świerczyńska",
    role: "Finance Lead",
    photoUrl: julias,
    linkedin: "https://www.linkedin.com/in/julia-%C5%9Bwierczy%C5%84ska-/",
  },
  {
    name: "Zuzanna Kramarz",
    role: "Marketing Lead",
    photoUrl: zuza,
    linkedin: "https://www.linkedin.com/in/zuzanna-kramarz-584402284/",
  },
  {
    name: "Virág Lencse",
    role: "Event Coordinator",
    photoUrl: virag,
    linkedin: "https://www.linkedin.com/in/virag-lencse-a3641b328/",
  },
  {
    name: "Maria Bordian",
    role: "Event Coordinator",
    linkedin: "https://www.linkedin.com/in/maria-bordian-011068249/",
  },
  {
    name: "Amberley Drummond",
    role: "Event Coordinator",
    linkedin: "https://www.linkedin.com/in/amberleydrummond/",
  },
  {
    name: "Zsófi Sándor",
    role: "Finance Coordinator",
    photoUrl: zsofi,
    linkedin: "https://www.linkedin.com/in/zsofisandor/",
  },
  {
    name: "Bence Balatoni",
    role: "Partners Coordinator",
    photoUrl: bence,
    linkedin: "https://www.linkedin.com/in/bence-attila-balatoni/",
  },
  {
    name: "György Sólyom",
    role: "Partners Coordinator",
    linkedin: "https://www.linkedin.com/in/gy%C3%B6rgy-s%C3%B3lyom-6792062bb/",
  },
  {
    name: "Andreea Vulpașu",
    role: "Marketing Coordinator",
    photoUrl: andreea,
    linkedin: "https://www.linkedin.com/in/andreea-vulpasu/",
  },
  {
    name: "Márk Antalóczy",
    role: "Marketing Coordinator",
    photoUrl: mark,
    linkedin: "https://www.linkedin.com/in/m%C3%A1rk-antal%C3%B3czy-ba8742326/",
  },
];
