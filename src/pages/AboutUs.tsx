import About from "../assets/media/about.png";
import ImageBlock from "../components/domain/ImageBlock/ImageBlock";
import MissionBlock from "../components/domain/MissionBlock/MissionBlock";
import StatsBlock from "../components/domain/StatsBlock/StatsBlock";
import TextBlock from "../components/domain/TextBlock/TextBlock";
import VideoBlock from "../components/domain/VideoBlock/VideoBlock";

export default function AboutUs() {
  return (
    <>
      <TextBlock
        title="Our Story"
        subtitle="About"
        bodyText={
          <>
            International Career Network Opportunities (ICON), originally
            founded as CEEN (Central Eastern European Network), was established
            in January 2024 by Nikita, Laura, Panna, Borbala, Roman, and Olga,
            international students at Aarhus University. Recognizing the
            challenges Eastern Europeans face when settling in Denmark,
            particularly in securing jobs, we took the initiative to create a
            support network. Our mission was to provide newcomers with
            opportunities they themselves had lacked, such as mentorship from
            experienced professionals to help guide their career paths.
            <br />
            <br />
            As our impact grew, we quickly realized our potential. By June 2024,
            CEEN evolved into ICON, expanding its reach to support all
            internationals in Denmark. The organization welcomed four new
            members and began hosting events in collaboration with Djøf,
            Deloitte, Siemens Gamesa, and other industry leaders. By spring
            semester 2026 ICON has a board of 11 people from 6 countries and
            focuses on organizing company visits and workshops that help
            internationals understand their career opportunities in Denmark.
          </>
        }
      />
      <ImageBlock image={About} altText="Board Group Picture" />
      <StatsBlock />
      <MissionBlock />
      <VideoBlock title="How ICON makes a Difference" youtubeId="_oZnyeY6iEI" />
    </>
  );
}
