import { Card, CardFooter, CardContent } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailSection = () => {
  return (
    <div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-xl">
          <p className="section-kicker">Don’t see it here?</p>
          <h2>Request a visual and we’ll build it.</h2>
          <p className="mt-5 text-lg text-black/70">
            Tell us the algorithm you want featured. When it is live, we’ll notify you.
          </p>

          <ul className="mt-7 space-y-3 pl-5 text-base text-black/75">
            <li className="list-disc">Usually turned around in a few days.</li>
            <li className="list-disc">One email, sent once when the product ships.</li>
            <li className="list-disc">No spam, no recurring newsletter.</li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#fffdf9] shadow-[0_18px_45px_rgba(0,0,0,0.07)]">
            <CardContent className="px-6 pt-6 sm:px-7">
              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-medium text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-11 rounded-lg border border-black/15 bg-[#f5f1ea] text-black placeholder:text-black/45 focus:border-[#d9773e] focus:ring-[#d9773e]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="request" className="text-sm font-medium text-black">
                    What should we visualize?
                  </Label>
                  <textarea
                    id="request"
                    className="min-h-28 rounded-lg border border-black/15 bg-[#f5f1ea] p-3 text-black outline-none transition-colors duration-200 placeholder:text-black/45 focus:border-[#d9773e]"
                    placeholder="Write the visual you want to see..."
                  ></textarea>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex-col gap-3 border-t border-black/10 px-6 py-6 sm:px-7">
              <Button
                type="submit"
                className="w-full lg bg-black px-4 py-2.5 font-medium text-white transition hover:bg-[#d9773e] hover:text-white"
              >
                Send request
              </Button>
              <p className="text-center text-sm leading-6 text-black/60">
                We’ll only use this email to notify you about the visual you requested.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
