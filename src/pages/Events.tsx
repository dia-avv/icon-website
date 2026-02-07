import EventCardListBlock from "../components/domain/EventCardListBlock/EventCardListBlock";
import TextBlock from "../components/domain/TextBlock/TextBlock";
import { pastEvents, upcomingEvents } from "../content/events";

export default function Events() {
  return (
    <>
      <TextBlock title="Events" />
      <EventCardListBlock title="Upcoming Events" items={upcomingEvents} />
      <EventCardListBlock title="Past Events" items={pastEvents} />
    </>
  );
}
