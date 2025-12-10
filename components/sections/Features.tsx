import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import featuresContent from "@/site/features";
import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";

type FeatureCardprops = FeaturesContent;

function FeatureCard({ title, content, image, footer }: FeatureCardprops) {
  return (

      <Card className="flex flex-col h-full group hover:scale-[101%] transition-all hover:shadow-lg">
        <CardHeader className="flex items-center">
          {image && (

              <Image loader={imageLoader} src={image} alt={title} width={200} height={200} className="group-hover:scale-105 transition-all "/>
 
          )}
          <CardTitle className="text-xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-md">{content}</CardDescription>
        </CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>

  );
}

const Features = () => {
  return (
    <div className="w-full h-full p-10 bg-samGreyLight">
      <h1 className="text-4xl font-bold text-center p-10">
        One Platform, One Experience
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animates when 20% of the section is visible
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {featuresContent.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center p-10 text-lg font-samPlayfair">
        We created Sam to simplify support. Schedule sessions, message your
        Navigator, or chat with your community—all from one easy-to-use
        platform.
      </div>

    </div>
  );
};

export default Features;