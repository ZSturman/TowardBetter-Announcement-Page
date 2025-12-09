import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


type FAQContainerProps = {
   faqs: FAQ[]
};

const FAQContainer = ({ faqs }: FAQContainerProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
            <AccordionItem key={index} value={faq.id}>
                <AccordionTrigger className="font-samPlayfair text-xl">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-samSchibsted text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  );
};

export default FAQContainer;
