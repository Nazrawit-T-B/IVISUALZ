import { Button } from "./components/ui/button";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="top-title">ALGORITHMS MADE VISIBLE</div>
        <div className="title flex flex-col gap-2">
          <h1>
            Interesting <em>Algorithms</em> and Comp Sci concepts Visualized for
            better learning and Understanding
          </h1>
        </div>
        <div className="sub-title">
          Built for Students and Passionate Enthusaists
        </div>
        <div className="Btns">
          <Button
            variant="outline"
            size="lg"
            className="text-gray-700 bg-transparent"
          >
            Explore
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-gray-700 bg-transparent"
          >
            Know More
          </Button>
        </div>
      </div>
    </>
  );
};
export default Hero;
