import Header from "./Header";
import Hero from "./Hero";
import CardDemo from "./CardDemo";
import Footer from "./Footer";
import ProductCard from "src/components/shadcn-space/card/card-03.jsx";
import { Separator } from "@/components/ui/separator";
import EmailSection from "./EmailSection";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="w-full ml-8">
        <p className=" text-white ">THE COLLECTION</p>
        <p className="pt-5 w-12/20">
          Each one is a live,interactive visualization-not a diagram.Step
          through it,slow down and hand your own input.
        </p>
      </div>

      <CardDemo />
      <div className="w-full ml-8 flex flex-col gap-3">
        <p className=" text-white ">THE PROCESS</p>
        <h3>Three steps, no setup</h3>
        01
        <div>
          <h4>Choose an algorithm</h4>
          <p className="pt-5 ">
          Pick from the collection of algorithms and data structures
        </p>
        </div>
         02
        <div>
          <h4>Feed it your data</h4>
          <p className="pt-5 ">
         Enter your own array, message or grid- or start from a generated example.
        </p>
        </div>
         03
        <div>
          <h4>Watch it Think and Learn</h4>
          <p className="pt-5 ">
            Step forward, rewind or let it run at your own pace.
        </p>
        </div>
      </div>
      <Separator className="bg-gray-800 dark:bg-gray-900 my-2" />
      <EmailSection/>
      <Footer />
    </>
  );
};
export default App;
