import AboutHome from "../assets/media/about-home.jpg";

import EventsBlockHome from "../assets/media/events-block-home.png";
import FeedbackBlockHome from "../assets/media/feedback-block-home.png";
import BackgroundImageBlock from "../components/domain/BackgroundImageBlock/BackgroundImageBlock";
import Hero from "../components/domain/HeroBlock/Hero";
import NormalBlock from "../components/domain/NormalBlock/NormalBlock";
import PartnersCarousel from "../components/domain/PartnersCarousel/PartnersCarousel";
import VideoBlock from "../components/domain/VideoBlock/VideoBlock";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    //main - hero
    <>
      <Hero
        title="INTERNATIONAL CAREER OPPORTUNITIES NETWORK"
        text="At ICON, we are dedicated to helping international students in Denmark navigate their career journey and unlock their full potential. We aim to connect you with career opportunities, build a strong professional network, and equip you with the skills and confidence to become highly sought-after candidates in the Danish job market."
      />
      {/*About Us*/}
      <NormalBlock
        title="Building bridges to a brigther future"
        text="In our first year, we hosted five successful events, connecting with over 300 students and building a vibrant community. Through partnerships with organizations like Tuborgfondet, Deloitte, and Djøf, we created valuable opportunities for international students, supporting them in their career development and professional growth."
        subtitle="About ICON"
        buttonLabel="About Us"
        image={AboutHome}
        onClick={() => navigate("/aboutus")}
      />

      <PartnersCarousel />

      {/*Events*/}
      <BackgroundImageBlock
        title="Events"
        text="Our events are designed to help students expand their networks, develop professional skills, and connect with internationally-oriented companies. We aim to offer unique opportunities that prepare students to enter and succeed in the Danish job market."
        buttonLabel="See all events"
        backgroundImage={EventsBlockHome}
        onclick={() => navigate("/events")}
      />

      {/*Insights*/}
      <VideoBlock title="Since we can relate..." youtubeId="1BOVIp8Qb4E" />

      {/*Feedback*/}
      <BackgroundImageBlock
        title="Your Feedback Matters"
        text="At ICON, we highly value feedback because it helps us grow and improve. We are constantly striving to enhance our events, and your input plays a crucial role in shaping our future. Whether you have suggestions, ideas, or comments, we’re always open to hearing them. Together, we can make each ICON event even more impactful and rewarding."
        backgroundImage={FeedbackBlockHome}
        buttonLabel="Contact Us"
        onclick={() => navigate("/contact")}
      />
    </>
  );
}
