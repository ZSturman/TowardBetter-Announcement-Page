"use client"

import { shareOnSocialLinks } from "@/site/social-links";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

const ShareOnSocialMedia = () => {
  return (
    <div className="flex flex-row w-full gap-8 ">
      {shareOnSocialLinks.map((socialLink) => (
        <Dialog key={socialLink.name}>
          <DialogTrigger asChild>
            <button className="text-3xl text-samGreen" aria-label={`Share on ${socialLink.name} (demo)`}>
              {socialLink.icon}
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Demo site</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              This is a demo site — sharing is disabled in this showcase.
            </DialogDescription>
            <div className="mt-4 text-right">
              <DialogClose className="rounded bg-slate-100 px-3 py-1">Close</DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ShareOnSocialMedia;
