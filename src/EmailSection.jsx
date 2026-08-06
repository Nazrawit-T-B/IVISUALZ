import "./email.css";
import { Card, CardFooter, CardContent } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const EmailSection = () => {
  return (
    <>
      <div className="email p-10 mt-20">
        <div className="w-full ml-8 mt-10 mb-20">
          <p className=" text-white tracking-widest pt-5">DON'T SEE IT HERE? </p>
          <h2>Request a visual and we'll build it</h2>
          <p className=" text-white  pt-5">
            Tell us the algorithm you want to see featured. When it is live we
            will notify you!
          </p>
          <br />
          <ul className="list-disc pl-5 pb-5 mb-10">
            <li>Usually turned around within few days</li>
            <li>One email, sent once, when the product ships</li>
            <li>No spam, no recurring newsletter</li>
          </ul>
          <div className="flex justify-center">
            <Card className="w-full max-w-lg overflow-hidden rounded-[1.25rem] bg-transparent shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <CardContent className="px-6 pt-6 sm:px-7">
            <form className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="h-11 rounded-lg border-gray-700 bg-[#0f1218] text-white placeholder:text-gray-500 focus:border-violet-400 focus:ring-violet-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="request" className="text-sm font-medium text-white">
                  What should we visualize?*
                </Label>
                <textarea
                  id="request"
                  className="min-h-28 rounded-lg border border-gray-700 bg-[#0f1218] p-3 text-white outline-none transition-colors duration-200 placeholder:text-gray-500 focus:border-gray-700"
                  placeholder="Write the visual you want to see..."
                ></textarea>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-3 border-t border-white/10 px-6 py-6 sm:px-7">
            <Button type="submit" className="w-full rounded-lg bg-white px-4 py-2.5 font-medium text-black transition hover:bg-black hover:text-white">
              Send Request
            </Button>
            <p className="text-center text-sm leading-6 text-gray-400">    We'll only use this email to notify you about the visual you
                requested</p>

            </CardFooter>
          </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmailSection;
