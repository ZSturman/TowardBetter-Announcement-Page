import { Button } from "@/components/ui/button";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const digitalPitchDeckSlides: DigitalPitchDeckSlide[] = [
  {
    index: 0,
    title: "Unprecedented Challenges",
    subtitle: "Today’s women face obstacles that require innovative solutions.",
    content: (
      <div>
        <p>Women are navigating a landscape of change, from career transitions to caregiving challenges.</p>
        <p>Building strong support networks is more critical than ever.</p>
      </div>
    ),
    image: `${basePath}/images/Women Report Network Support.png`,
    buttons: [
      <Button variant="default" key={1}>Discover More</Button>,
    ],
  },
  {
    index: 1,
    title: "Career Transitions",
    subtitle: "1.8M women are re-entering or shifting careers post-pandemic.",
    content: (
      <div>
        <p>The pandemic has reshaped career trajectories for many women, presenting unique opportunities and hurdles.</p>
      </div>
    ),
    image: `${basePath}/images/Three Figures at Sunrise.jpg`,
    buttons: [
      <Button variant="outline" key={2}>Learn More</Button>,
    ],
  },
  {
    index: 2,
    title: "Eldercare Crisis",
    subtitle: "60% of caregivers are women, shouldering increasing responsibilities.",
    content: (
      <div>
        <p>Women are at the forefront of caregiving, balancing family needs with career aspirations.</p>
        <p>This growing crisis demands community and systemic support.</p>
      </div>
    ),
    image: `${basePath}/images/Close-Up of Interlocked Arms.jpg`,
    buttons: [
      <Button variant="secondary" key={3}>Explore Solutions</Button>,
    ],
  },
  {
    index: 3,
    title: "Support Networks",
    subtitle: "Only 28% of women report having a reliable support network.",
    content: (
      <div>
        <p>The gap in support networks is critical and addressing this can empower women to thrive.</p>
        <p>Our solution fosters connections and builds stronger communities.</p>
      </div>
    ),
    image: `${basePath}/images/Diverse Women in Neutral Attire.jpeg`,
    buttons: [
      <Button variant="secondary" key={4}>Join the Network</Button>,
      <Button variant="ghost" key={5}>Learn More</Button>,
    ],
  },
];

export default digitalPitchDeckSlides;