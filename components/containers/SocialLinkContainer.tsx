"use client"

import React from "react";
import { socialLinks } from "../../site/social-links";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

const SocialLinkContainer = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <button aria-label={`Open ${link.name} (demo)`} className="text-2xl">
              {link.icon}
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Demo site</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              This is a demo site — external links are disabled for this showcase.
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

export default SocialLinkContainer;
