// components/EmailForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

type EmailFormProps = {
  joinedWaitlist: boolean;
  setJoinedWaitlist: (joined: boolean) => void;
};

const EmailForm = ({ joinedWaitlist, setJoinedWaitlist }: EmailFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      // Demo mode: do not send real emails from the demo site.
      // Simulate a network call and mark success.
      console.info("Demo submission — no email will be sent. Recipient:", email);
      await new Promise((resolve) => setTimeout(resolve, 700));

      setIsSuccess(true);
      setJoinedWaitlist(true);
      setEmail("");
    } catch (error) {
      console.error("Demo submission error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xl">
      {!joinedWaitlist && (
        <div className="w-full flex sm:flex-row flex-col gap-2">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-opacity-50 bg-white"
              disabled={isLoading || isSuccess}
            />
          </div>

          {joinedWaitlist && (
            <h2 className="text-xl text-black"> Thank you for joining our waitlist! We&apos;ll be in touch soon
            
            </h2>

          )}
          <div>
            <Button
              type="submit"
              variant={"outline"}
              className="w-full bg-samGreenDark text-samBlush hover:bg-gray-100 hover:text-samGreenDark relative overflow-hidden"
              disabled={isLoading || isSuccess}
            >
              {isLoading && (
                <div
                  key="loading"
                  className="absolute inset-0 flex items-center justify-center bg-white"
                >
                  <Loader2 className="w-6 h-6 text-samGreenLight animate-spin" />
                </div>
              )}
              {isSuccess && (
                <div
                  key="success"
                  className="absolute inset-0 flex items-center justify-center bg-samGreenLight"
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              )}
              <span className={isLoading || isSuccess ? "invisible" : ""}>
                Join Waitlist
              </span>
            </Button>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="mt-4  text-samGreenLight">
          Thank you for joining our waitlist! We&apos;ll be in touch soon
        </div>
      )}
      {isError && (
        <div className="mt-4  text-samRedLight">
          Something went wrong. Please try again.
        </div>
      )}

    </form>
  );
};

export default EmailForm;
