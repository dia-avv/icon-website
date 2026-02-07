import understory from "../assets/partners/understory-logo.png";
import deloitte from "../assets/partners/deloitte-logo.png";
import studenterhusAarhus from "../assets/partners/studenterhus-logo.png";
import startupAarhus from "../assets/partners/startup-logo.jpg";
import djof from "../assets/partners/djof-logo.png";
import helloaarhus from "../assets/partners/hello-logo.png";

export interface Partners {
  id: string;
  name?: string;
  logo: string;
  description?: string;
  website?: string;
  altText: string;
}

export const partnerCompanies: Partners[] = [
  {
    id: "Understory",
    name: "Understory",
    description:
      "Understory is an Aarhus-based travel technology startup founded in 2023 that develops an AI-driven software platform for experience providers. Its platform integrates booking, payment and marketing tools in a single system to help tours, activities and experience-based businesses streamline operations and grow their offerings. ",
    logo: understory,
    website: "https://understory.io/",
    altText: "Understory",
  },
  {
    id: "Deloitte",
    name: "Deloitte",
    description:
      "Deloitte provides audit, consulting, tax and financial advisory services. In Denmark, Deloitte works with public authorities and private companies across multiple industries and has offices in Copenhagen, Aarhus and Aalborg. Deloitte is part of an international network of professional services firms operating in many countries.",
    logo: deloitte,
    website: "https://www.deloitte.com/dk/en.html",
    altText: "Deloitte",
  },
];

export const partnerOrganizations: Partners[] = [
  {
    id: "Studenterhus Aarhus",
    name: "Studenterhus Aarhus",
    description:
      "Studenterhus Aarhus is a private, non-profit student organisation and cultural hub in Aarhus. It operates a café, bar and event spaces, and offers a varied programme of concerts, lectures, workshops, networking events and social activities. The organisation has more than 8 500 members and serves as a meeting place for students across disciplines, providing opportunities for social, cultural and professional engagement.",
    logo: studenterhusAarhus,
    website: "https://studenterhusaarhus.dk/",
    altText: "Studenterhus Aarhus",
  },
  {
    id: "Startup Aarhus",
    name: "Startup Aarhus",
    description:
      "Startup Aarhus is a non-profit community organisation working to strengthen the startup ecosystem in Aarhus. It supports early-stage founders and startup initiatives by organising events, facilitating access to networks, knowledge and capital, and coordinating ecosystem activities in collaboration with universities and regional stakeholders.",
    logo: startupAarhus,
    website: "https://www.startupaarhus.com/",
    altText: "Startup Aarhus",
  },
  {
    id: "Djøf",
    name: "Djøf",
    description:
      "Djøf is a Danish professional association and trade union for lawyers, economists and graduates within social sciences. It represents both students and professionals working in the public and private sectors. Djøf offers career guidance, legal advice, courses and support related to employment and working life, and has around 100,000 members in Denmark.",
    logo: djof,
    website: "https://www.djoef.dk/",
    altText: "Djøf",
  },
  {
    id: "Hello Aarhus",
    name: "Hello Aarhus",
    description:
      "Hello Aarhus is a community organisation that helps internationals settle in Aarhus and connect with others. It organises social events, cultural activities and networking opportunities to support newcomers in building a social network and integrating into the local community.",
    logo: helloaarhus,
    website: "https://helloaarhus.dk/",
    altText: "Hello Aarhus",
  },
];

export const partners: Partners[] = [
  ...partnerCompanies,
  ...partnerOrganizations,
];
