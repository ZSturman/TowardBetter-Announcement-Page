import React from "react";
import ShareOnSocialMedia from "./ShareOnSocialMedia";

const ShareSam = () => {
  return (
    <div className="flex flex-col w-full">

        <h3 className="text-3xl text-nowrap  font-bold my-8">
            Thank you for joining our waitlist!
        </h3>
      <div className="text-3xl flex flex-col items-start justify-center gap-4">
        <div className="text-nowrap">Share Sam</div>

        <ShareOnSocialMedia />
      </div>
    </div>
  );
};

export default ShareSam;
