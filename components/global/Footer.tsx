import Link from "next/link";
import React from "react";
import SocialLinkContainer from "@/components/containers/SocialLinkContainer";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-20 py-32 gap-12 text-white bg-samGreen font-samPlayfair">
      <div className="text-xl">Follow Us</div>

      <div className="flex flex-row gap-8">
        <SocialLinkContainer />
      </div>

      <div className="flex flex-row gap-8">
        <Link href="/about">About Us</Link>

        <Link href="/contact">Contact Us</Link>

        <Link href="/privacy-policy">Privacy Policy</Link>

        <Link href="/terms-and-conditions">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;
