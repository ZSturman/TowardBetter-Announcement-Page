const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const featuresContent: FeaturesContent[] = [
  {
    title: "Dedicated Personal Navigator",
    content:
      "A real, live Navigator matched to your preferences, age, location, and culture. No bots, no scripts. Just real support.",
    image: `${basePath}/images/Celestial Hands Holding Heart.png`,
  },
  {
    title: "Private Sessions",
    content:
      "One-on-one sessions with handpicked experts, guiding you through every step of your unique journey.",
    image: `${basePath}/images/Abstract Silhouettes with Cosmic Connection.png`,
  },
  {
    title: "Community Support",
    content:
      "Connect with a private, like-minded community where you can share, learn, and grow with others who truly get it.",
    image: `${basePath}/images/Collaboration with Colorful Puzzle Pieces.png`,
  },
  {
    title: "Curated Resources",
    content:
      "A library of carefully selected books, checklists, videos, podcasts, and live events to help you navigate life’s changes.",
    image: `${basePath}/images/Doorway to a Rainbow Universe.png`,
  },
];

export default featuresContent;
