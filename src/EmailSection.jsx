import "./email.css";
import { Card, CardFooter, CardContent } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const EmailSection = () => {
  return (
    <>
      <div className="email pb-15">
        <div className="w-full ml-8 mt-0">
          <p className=" text-white pt-3">DON'T SEE IT HERE? </p>
          <h3>Request a visual and we'll build it</h3>
          <p className="pt-5 ">
            Tell us the algorithm you want to see featured. When it is live we
            will notify you!
          </p>
          <br />
          <ul className="list-disc pl-5 pb-5">
            <li>Usually turned around within few days</li>
            <li>One email, sent once, when the product ships</li>
            <li>No spam, no recurring newsletter</li>
          </ul>
          <Card className="w-full max-w-lg mx-auto bg-gray-800">
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-white">
                        What should we visualize *
                      </Label>
                    </div>
                    <textarea
                      className="border border-gray-300 focus:border-gray-600 rounded-md p-3 outline-none transition-colors duration-200"
                      placeholder="Write visuals you need to see..."
                    ></textarea>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2 ">
              <Button type="submit" className="w-full">
                Send Request
              </Button>
              <p className="">
                We'll only use this email to notify you about the visual you
                requested
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default EmailSection;
