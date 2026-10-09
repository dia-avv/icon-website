import juliab from "../assets/members/juliab.jpg";
import zuza from "../assets/members/zuza.jpg";
import andreea from "../assets/members/andreea.jpg";
//import mark from "../assets/members/mark.jpg";
import zsofi from "../assets/members/zsofi.jpg";
import bence from "../assets/members/bence.jpg";
//import virag from "../assets/members/virag.jpg";
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
    role: "Vice President",
    photoUrl: reka,
    linkedin: "https://www.linkedin.com/in/reka-aghazi-767992299/",
  },
  {
    name: "Zuzanna Kramarz",
    role: "Marketing Lead",
    photoUrl: zuza,
    linkedin: "https://www.linkedin.com/in/zuzanna-kramarz-584402284/",
  },
  {
    name: "Zsófi Sándor",
    role: "Finance Lead",
    photoUrl: zsofi,
    linkedin: "https://www.linkedin.com/in/zsofisandor/",
  },
  {
    name: "Maria Bordian",
    role: "Events Lead",
    linkedin: "https://www.linkedin.com/in/maria-bordian-011068249/",
  },
  {
    name: "Bence Balatoni",
    role: "Partners Lead",
    photoUrl: bence,
    linkedin: "https://www.linkedin.com/in/bence-attila-balatoni/",
  },
  {
    name: "Amberley Drummond",
    role: "Event Coordinator",
    linkedin: "https://www.linkedin.com/in/amberleydrummond/",
  },
  {
    name: "Lázár Benkovics-Kaszner",
    role: "Events Coordinator",
    linkedin:
      "https://www.linkedin.com/in/l%C3%A1z%C3%A1r-benkovics-kaszner-756117312/",
  },
  {
    name: "Izabela Butycz",
    role: "Events Coordinator",
    linkedin: "https://www.linkedin.com/in/izabelabutycz/",
  },
  /*
  {
    name: "Virág Lencse",
    role: "Events Coordinator",
    photoUrl: virag,
    linkedin: "https://www.linkedin.com/in/virag-lencse-a3641b328/",
  },
  */
  {
    name: "Mariana Cațer",
    role: "Partners Coordinator",
    linkedin: "https://www.linkedin.com/in/mariana-ca%C8%9Ber-a62973387/",
  },
  /*
  {
    name: "György Sólyom",
    role: "Partners Coordinator",
    linkedin: "https://www.linkedin.com/in/gy%C3%B6rgy-s%C3%B3lyom-6792062bb/",
  },
  */
  {
    name: "Bartosz Kunka",
    role: "Finance Coordinator",
    linkedin: "https://www.linkedin.com/in/bartosz-kunka-96aa25327/",
  },
  {
    name: "Andreea Vulpașu",
    role: "Marketing Coordinator",
    photoUrl: andreea,
    linkedin: "https://www.linkedin.com/in/andreea-vulpasu/",
  },
  {
    name: "Daniele Daugvilaite",
    role: "Marketing Coordinator",
    linkedin: "https://www.linkedin.com/in/daugvilaite/",
  },
  {
    name: "Anna Molnár",
    role: "Marketing Coordinator",
    linkedin: "https://www.linkedin.com/in/anna-moln%C3%A1r-793080374/",
  },
  /*
  {
    name: "Márk Antalóczy",
    role: "Marketing Coordinator",
    photoUrl: mark,
    linkedin: "https://www.linkedin.com/in/m%C3%A1rk-antal%C3%B3czy-ba8742326/",
  },
  */
];
