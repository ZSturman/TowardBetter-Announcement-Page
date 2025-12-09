import faqs from "@/site/faqs";
import FAQContainer from "../containers/FAQContainer";

const FAQs = () => {
  return (
    <div className="w-full p-20 max-w-[900px] mx-auto">

      <FAQContainer faqs={faqs} />
    </div>
  );
};

export default FAQs;
