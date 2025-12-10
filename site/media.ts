const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stylizedDuoInBlackAndWhite = `${basePath}/images/Stylized Duo in Black and White.png`
const abstractPortraitWithRedPattern = `${basePath}/images/Abstract Portrait with Red Pattern.png`
const stripedBackgroundWithRecliningFigure = `${basePath}/images/Striped Background with Reclining Figure.png`
const doubleExposureFaces = `${basePath}/images/Double Exposure Faces with Abstract Design.png`
const diverseWomenInNeutralAttire = `${basePath}/images/Diverse Women in Neutral Attire.jpeg`
const minimalistBlackAndWhiteWithSnail = `${basePath}/images/Minimalist Black and White with Snail.jpg`
const facelessPersonShopping = `${basePath}/images/Collage of Faceless Person Shopping.png`
const highHeelsWithRainbowDesign = `${basePath}/images/High Heels with Rainbow Design.png`
const artDecoFashionCollage = `${basePath}/images/Art Deco-Inspired Fashion Collage.png`
const threeFiguresAtSunrise = `${basePath}/images/Three Figures at Sunrise.jpg`
const rainbowDoorway = `${basePath}/images/Doorway to a Rainbow Universe.png`
const colorfulPuzzleCollaboration = `${basePath}/images/Collaboration with Colorful Puzzle Pieces.png`
const abstractSilhouettesWithSymbols = `${basePath}/images/Abstract Silhouettes with Cosmic Connection.png`
const only28PercentSupport = `${basePath}/images/Women Report Network Support.png`
const opticalIllusionWoman = `${basePath}/images/Woman in Optical Illusion Spirals.png`
const celestialHandsWithHeart = `${basePath}/images/Celestial Hands Holding Heart.png`
const colorfulLightHand = `${basePath}/images/Colorful Light with Outstretched Hand.jpg`
const interlockedArmsImg = `${basePath}/images/Close-Up of Interlocked Arms.jpg`
const teamworkBuildingShapes = `${basePath}/images/Illustration of Team Building with Shapes.png`
const collaborativeEffortWithGreenBall = `${basePath}/images/Collaborative Effort with Green Ball.png`
const samLogoBlush = `${basePath}/images/Sam Logo - Blush.svg`
const samLogoEmerald = `${basePath}/images/Sam Logo - Emerald.svg`
const samLogoSangria = `${basePath}/images/Sam Logo - Sangria.svg`
const womenStatTextImg = `${basePath}/images/Women Stat Text.png`

const logoBlush: ImageElement = {
  src: samLogoBlush,
  alt: "Sam Logo",
  name: "Sam Logo - Blush",
};

const logoGreen: ImageElement = {
  src: samLogoEmerald,
  alt: "Sam Logo",
  name: "Sam Logo - Emerald",
};

const logoRed: ImageElement = {
  src: samLogoSangria,
  alt: "Sam Logo",
  name: "Sam Logo - Sangria",
};

const logo = {
  blush: logoBlush,
  green: logoGreen,
  red: logoRed,
};

const sylizedDuo: ImageElement = {
  src: stylizedDuoInBlackAndWhite,
  alt: "A minimalist painting of two figures, one in a black dress and the other in white, embracing against a cream-colored backdrop.",
  name: "Stylized Duo in Black and White",
};

const abstractPortait: ImageElement = {
  src: abstractPortraitWithRedPattern,
  alt: "A collage of a woman’s profile combined with abstract triangular designs over her eyes and a red, textured background.",
  name: "Abstract Portrait with Red Pattern",
};

const stripedBackground: ImageElement = {
  src: stripedBackgroundWithRecliningFigure,
  alt: "A monochromatic image of a person reclining on a background of vertical black and white stripes, creating an optical illusion effect.",
  name: "Striped Background with Reclining Figure",
};

const doubleExposure: ImageElement = {
  src: doubleExposureFaces,
  alt: "An artistic collage featuring two overlapping faces with abstract geometric shapes, including red and black elements.",
  name: "Double Exposure Faces with Abstract Design",
};

const diverseWomen: ImageElement = {
  src: diverseWomenInNeutralAttire,
  alt: "A group of women of varying ages and ethnicities, standing together on a warm brown background, wearing simple neutral-toned outfits.",
  name: "Diverse Women in Neutral Attire",
};

const minimalistBlackAndWhite: ImageElement = {
  src: minimalistBlackAndWhiteWithSnail,
  alt: "A grayscale image showing a close-up of a person holding a small snail on their arm, with a minimalist composition.",
  name: "Minimalist Black and White with Snail",
};

const facelessPerson: ImageElement = {
  src: facelessPersonShopping,
  alt: "A colorful collage of a faceless figure carrying shopping bags, against a vibrant background of geometric shapes and cityscape.",
  name: "Collage of Faceless Person Shopping",
};

const highHeels: ImageElement = {
  src: highHeelsWithRainbowDesign,
  alt: "A surreal image of a pair of legs in black high heels emerging from colorful rainbow curves on a pastel background.",
  name: "High Heels with Rainbow Design",
};

const artDecoFashion: ImageElement = {
  src: artDecoFashionCollage,
  alt: "A fashionable woman in a black outfit standing in an abstract Art Deco setting with geometric shapes and bold colors.",
  name: "Art Deco-Inspired Fashion Collage",
};

const threeFigures: ImageElement = {
  src: threeFiguresAtSunrise,
  alt: "Silhouettes of three people standing on a mountain peak, with a stunning sunrise casting warm hues over a misty valley.",
  name: "Three Figures at Sunrise",
};

const toolKitIcon: ImageElement = {
  src: rainbowDoorway,
  alt: "An open door with a rainbow path leading into a star-filled black sky, symbolizing imagination and exploration.",
  name: "Doorway to a Rainbow Universe",
};

const colorfulPuzzle: ImageElement = {
  src: colorfulPuzzleCollaboration,
  alt: "Abstract illustration of multiple hands arranging colorful geometric puzzle pieces to form a circle.",
  name: "Collaboration with Colorful Puzzle Pieces",
};

const abstractSilhouettes: ImageElement = {
  src: abstractSilhouettesWithSymbols,
  alt: "Two head silhouettes facing each other, connected by geometric symbols and celestial elements, symbolizing communication and thought.",
  name: "Abstract Silhouettes with Cosmic Connection",
};

const only28Percent: ImageElement = {
  src: only28PercentSupport,
  alt: "A highlighted statistic in bold text reading ‘Only 28% of women reported having a network they can rely on,’ with a background of small, gray text on related social issues.",
  name: "28% of Women Report Network Support",
};

const opticalIllusion: ImageElement = {
  src: opticalIllusionWoman,
  alt: "A monochromatic image of a woman sitting amidst hypnotic black-and-white spirals, creating an optical illusion effect.",
  name: "Woman in Optical Illusion Spirals",
};

const celestialHands: ImageElement = {
  src: celestialHandsWithHeart,
  alt: "An abstract illustration of cosmic-themed hands holding a glowing red heart surrounded by planetary rings.",
  name: "Celestial Hands Holding Heart",
};

const colorfulLight: ImageElement = {
  src: colorfulLightHand,
  alt: "A hand reaching out against a soft pastel gradient background with flowing, abstract light patterns.",
  name: "Colorful Light with Outstretched Hand",
};

const interlockedArms: ImageElement = {
  src: interlockedArmsImg,
  alt: "A black-and-white photo showing two individuals wearing white shirts, linking their arms in a close and supportive gesture.",
  name: "Close-Up of Interlocked Arms",
};

const teamworkBuilding: ImageElement = {
  src: teamworkBuildingShapes,
  alt: "A colorful illustration of a team working together to arrange large geometric shapes, including a green circle, a red square, and a purple triangle.",
  name: "Illustration of Team Building with Shapes",
};

const collaborativeEffort: ImageElement = {
  src: collaborativeEffortWithGreenBall,
  alt: "An illustration of two people working together to push a large green ball forward, symbolizing teamwork and determination.",
  name: "Collaborative Effort with Green Ball",
};

const womenStatText: ImageElement = {
  src: womenStatTextImg,
  alt: "A stylized text design featuring the statistics of women hardships",
  name: "Women Stat Text",
};

const allImages: ImageElement[] = [
  sylizedDuo,
  abstractPortait,
  stripedBackground,
  doubleExposure,
  diverseWomen,
  minimalistBlackAndWhite,
  facelessPerson,
  highHeels,
  artDecoFashion,
  threeFigures,
  toolKitIcon,
  colorfulPuzzle,
  abstractSilhouettes,
  only28Percent,
  opticalIllusion,
  celestialHands,
  colorfulLight,
  interlockedArms,
  teamworkBuilding,
  collaborativeEffort,
  womenStatText,
];
export { logo, allImages,   sylizedDuo,
  abstractPortait,
  stripedBackground,
  doubleExposure,
  diverseWomen,
  minimalistBlackAndWhite,
  facelessPerson,
  highHeels,
  artDecoFashion,
  threeFigures,
  toolKitIcon,
  colorfulPuzzle,
  abstractSilhouettes,
  only28Percent,
  opticalIllusion,
  celestialHands,
  colorfulLight,
  interlockedArms,
  teamworkBuilding,
  collaborativeEffort,
  womenStatText, };
