import Header from "./Header";
import Hero from "./Hero";
import CardDemo from "./CardDemo";
import Footer from "./Footer";
import ProductCard from "src/components/shadcn-space/card/card-03.jsx";
import { Separator } from "@/components/ui/separator";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="w-full ml-8"> <p className=" text-white ">THE COLLECTION</p>
        <p className="pt-5 w-12/20">Each one is a live,interactive visualization-not a diagram.Step through it,slow down and hand your own input.</p>
      </div>

      <CardDemo />
      <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
      <Footer />
    </>
  );
};
export default App;
