import { Button } from "./components/ui/button";
import "./hero.css";
import StrokeText from "./components/StrokeText";
import LetterGlitch from "./components/LetterGlitch";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-x-10 min-h-[70vh] w-full max-w-7xl mx-auto px-6">
        <div className="hero w-full md:w-[60%]">
          <div>
          <p>A</p>
          </div>
          <div className="title flex flex-col gap-2">
            <h1>
              Interesting <em></em> and Comp Sci concepts Visualized for better
              learning and Understanding
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
        <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full">
          <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth
  speed={45}
  colors={["#ffffff","#b1b1b1","#9f9f9f"]}
  showCenterVignette
  showOuterVignette
/>
        </div>
      </div>
    </>
  );
};
export default Hero;
