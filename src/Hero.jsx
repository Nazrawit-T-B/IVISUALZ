import { Button } from "./components/ui/button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p className="eyebrow">Algorithms made visual</p>

      <div className="title flex flex-col gap-2">
        <h1>
         See the algorithms in action and understand the logic behind them.
        </h1>
      </div>

      <div className="sub-title">Interactive visualizations for algorithms, cryptography, and computer science.</div>

      <div className="Btns">
        <Button variant="outline" size="lg" className="hero-button">
          Explore
        </Button>
        <Button variant="outline" size="lg" className="hero-button">
          Know more
        </Button>
      </div>
    </div>
  );
};

export default Hero;
