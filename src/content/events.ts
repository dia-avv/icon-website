import incommodities2025 from "../assets/events/incommodities2025.jpg";
import networking2025 from "../assets/events/networking2025.jpg";
import salling2025 from "../assets/events/salling2025.jpeg";
import deloitte2025 from "../assets/events/deloitte2025.jpg";
import arla2025 from "../assets/events/arla2025.jpg";
import formalize2024 from "../assets/events/formalize2024.jpg";
import deloitte2024 from "../assets/events/deloitte2024.jpg";
import siemens2024 from "../assets/events/siemens2024.jpg";
import djof2024 from "../assets/events/djof2024.jpg";
import alumni2024 from "../assets/events/alumni2024.jpg";
import intro2024 from "../assets/events/intro2024.jpg";
import careercafe2026feb from "../assets/events/careercafe2026feb.png";

export interface Event {
  id: string;
  title: string;
  date: string;
  partner: string;
  location?: string;
  description: string;
  image?: string;
  registrationLink?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "The Career Cafe",
    title: "The Career Cafe",
    date: "12 February 2025",
    partner: "ICON & Studenterhus Aarhus",
    description:
      "Grab your CV, cover letter, bring any sneaking questions, and enjoy the evening full of stories and insights from internationals leading their careers in Denmark!",
    image: careercafe2026feb,
  },
];

export const pastEvents: Event[] = [
  {
    id: "InCommodities X ICON",
    title: "InCommodities X ICON",
    date: "18 September 2025",
    partner: "InCommodities",
    description:
      "Our participants had the opportunity to visit InCommodities’ headquarters, where they explored the office, took part in a trading game, enjoyed a delicious dinner, and connected with employees during a networking session – all while gaining a real insight into the dynamic energy trading world.",
    image: incommodities2025,
  },
  {
    id: "The Networking Workshop",
    title: "The Networking Workshop",
    date: "29 April 2025",
    partner:
      "Luke Taylor, Thorleif Gotved, Charlotte Schou Carrington & Olga Szczotka",
    description:
      "Through a panel discussion, roundtable conversations, and a networking session, the students had the opportunity to ask hard, often uncomfortable questions about building connections and look at networking from different perspectives.",
    image: networking2025,
  },
  {
    id: "Discover Salling Group",
    title: "Discover Salling Group",
    date: "3 April 2025",
    partner: "Salling Group",
    description:
      "Students from ICON had the opportunity to visit the Salling Group Headquarters, where they explored commercial, IT and logistics departments, and gained insights into careers in retail through presentations, office tours, and networking.",
    image: salling2025,
  },
  {
    id: "Business Chemistry ICON x Deloitte",
    title: "Business Chemistry ICON x Deloitte",
    date: "6 March 2025",
    partner: "Deloitte",
    description:
      "Participants got a firsthand look at the firm, learned about career paths from student workers, and took part in a Business Chemistry Workshop to understand different personality types and their impact on professional interactions.",
    image: deloitte2025,
  },
  {
    id: "Get A Taste of Arla Foods Ingredients",
    title: "Get A Taste of Arla Foods Ingredients",
    date: "13 February 2025",
    partner: "Arla Foods Ingredients",
    description:
      "Students visited Arla Foods Ingredients to learn about the company, the student assistant roles and the transition to full-time positions. The event included a tour of the lab, product tasting, and tour of Arla’s  headquarter, concluding with a Q&A session and dinner.",
    image: arla2025,
  },
  {
    id: "Your Career in Tech Starts Here",
    title: "Your Career in Tech Starts Here",
    date: "20 November 2024",
    partner: "Formalize",
    description:
      "During the event, Formalize’s first international hires shared their growth journey and career insights. Attendees participated in a recruitment exercise, explored student opportunities, and left the event inspired by the team’s personal journeys.",
    image: formalize2024,
  },
  {
    id: "Your Journey at Deloitte",
    title: "Your Journey at Deloitte",
    date: "2 October 2024",
    partner: "Deloitte",
    description:
      "The exclusive event with Deloitte featured inspiring speakers, a problem-solving workshop, and insights into Deloitte’s graduate program. Students gained valuable knowledge about consulting careers while networking with professionals on the 21st floor.",
    image: deloitte2024,
  },
  {
    id: "Renewables x ICON",
    title: "Renewables x ICON",
    date: "12 September 2024",
    partner: "PEAK Wind and Siemens Gamesa",
    description:
      "The event connected students with experts from top Danish renewable energy companies. Participants explored industry trends, key projects, and achievements through insightful presentations, a panel discussion, and an interactive Q&A session. ",
    image: siemens2024,
  },
  {
    id: "Career Workshop",
    title: "Career Workshop",
    date: "17 April 2024",
    partner: "Djøf & Aarhus BSS Career",
    description:
      "The workshop provided participants with expert guidance on creating effective CVs, motivational letters, and excelling in interviews. Career consultants shared practical tips, offering students actionable insights to stand out in the job market. ",
    image: djof2024,
  },
  {
    id: "International Alumni Roundtable",
    title: "International Alumni Roundtable",
    date: "7 March 2024",
    partner: "Aarhus BSS",
    description:
      "The roundtable connected students with five Aarhus BSS alumni, offering insights into careers in academia, banking, renewables, Big4 firms, and top-tier consulting. Attendees received targeted advice and industry-specific perspectives in an interactive setting. ",
    image: alumni2024,
  },
  {
    id: "Intro Event",
    title: "Intro Event",
    date: "15 February 2024",
    partner:
      "Nichlas Walsted, Oleksandr Andrushkiv and Andreea Catalina Tomoni",
    description:
      "The guest speakers shared insights on the importance of internationals in Denmark and their post-graduation experiences. They gave valuable advice on the hiring process, professional development, and navigating cultural nuances in salary negotiations.",
    image: intro2024,
  },
];
