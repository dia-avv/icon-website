import AlumniBlock from "../components/domain/AlumniBlock/AlumniBlock";
import MembersBlock from "../components/domain/MembersBlock/MembersBlock";
import TextBlock from "../components/domain/TextBlock/TextBlock";

export default function OurTeam() {
  return (
    <div>
      <TextBlock title="Our Team" subtitle="About us" />
      <MembersBlock />

      <TextBlock title="Our Alumni" />
      <AlumniBlock />
    </div>
  );
}
