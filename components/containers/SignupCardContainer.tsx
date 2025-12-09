import React from "react";
import {
  Card,
  CardContent,
  
  CardDescription,
  
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type SignupCardContainerProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  content: string;
  triggerText: string;
  formTitle: string;
  formDescription: string;
  invert: boolean;
  className?: string;
};

const SignupCardContainer = ({
  children,
  title,
  description,
  content,
  triggerText,
  formTitle,
  formDescription,
  invert,
  className,
}: SignupCardContainerProps) => {
  return (
    <Card
      className={`${className} max-w-[900px] mx-auto  ${
        invert ? "bg-samGreenDark  text-samBlush" : "bg-white text-samGreenDark"
      } `}
    >
      <CardHeader className="text-center
      ">
        <CardTitle className="text-4xl">{title}</CardTitle>

        {description && (
          <CardDescription className="font-samSchibsted text-lg ">{description}</CardDescription>
        )}
       
      </CardHeader>
      <CardContent className="text-center text-lg">
        <p className={"font-samSchibsted"}>{content}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={` hover:shadow-md font-samSchibsted ${
                invert
                  ? "bg-white text-samGreenDark hover:bg-samGreenDark hover:text-samBlush"
                  : "bg-samGreenDark text-samBlush hover:bg-samBlush hover:text-samGreenDark"
              } `}
            >
              {triggerText}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] font-samPlayfair">
            <DialogHeader>
              <DialogTitle className="text-2xl">{formTitle}</DialogTitle>
              <DialogDescription className="font-samSchibsted">
                {formDescription}
              </DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default SignupCardContainer;
