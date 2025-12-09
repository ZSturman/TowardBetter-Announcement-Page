import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import EmailForm from "../forms/EmailForm";

type EarlyAccessIncentiveProps = {
  joinedWaitlist: boolean;
  setJoinedWaitlist: (joined: boolean) => void;
};

const EarlyAccessIncentive = ({
  joinedWaitlist,
  setJoinedWaitlist,
}: EarlyAccessIncentiveProps) => {
  return (
    <section className="py-20 px-4 md:px-0 flex flex-col items-center justify-center">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Early Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto text-center">
            {joinedWaitlist && (
              <>
                <p className="text-xl mb-8 font-samPlayfair md:text-nowrap">
                  Thank you for joining the waitlist! 🎉 Stay tuned for updates.
                </p>
                <p className="text-md mb-4">
                  Invite your friends to join and get more exclusive perks.
                </p>
              </>
            )}

            <p className="text-xl mb-8 font-samPlayfair md:text-nowrap">
              Be the first to experience our product and receive exclusive perks
              by signing up for our early access program.
            </p>
            <Dialog>
              <DialogTrigger className="border-2 p-4 px-8 bg-samGreenDark text-samBlush rounded-md text-xl">
                Join the Waitlist
              </DialogTrigger>

              <DialogContent className="bg-samBlush py-10">
                <DialogTitle className="text-3xl font-bold text-center">
                  Life’s big moments?
                  <br /> We’re here for all of them
                </DialogTitle>

                <EmailForm
                  joinedWaitlist={joinedWaitlist}
                  setJoinedWaitlist={setJoinedWaitlist}
                />
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>


    </section>
  );
};

export default EarlyAccessIncentive;
