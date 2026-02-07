export interface Faq {
  title: string;
  bodyText: string;
}

export const faqData: Faq[] = [
  {
    title: "How can I sign up for an event?",
    bodyText:
      "Go to the events section and click “sign up” on our upcoming event. Eventually, you can go to our social media, find the post announcing the event and find the registration link there!",
  },
  {
    title: "What types of events do you organize?",
    bodyText:
      "We organize a variety of events, including company visits, skill-building workshops, discussion panels, company presentations, and much more.",
  },
  {
    title: "Who can attend our events?",
    bodyText:
      "Our events are dedicated to international students in Denmark, however all students are welcome to join.",
  },
  {
    title: "Where are your events held?",
    bodyText:
      "Our events are primarily held at Aarhus BSS, located at Fuglesangs Allé 4, 8210 Aarhus.",
  },
];
