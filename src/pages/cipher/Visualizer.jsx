import Header from "@/Header";
import { Button } from "@/components/ui/button";
const Visualizer = () => {
  return (
    <>
    <Header/>
    <section className="visualizer px-15 py-25">
      <div className="visualizer-heading">
        <p className="eyebrow">INTERACTIVE VISUALIZER</p>
        <h2>Caesar's Cipher</h2>
        <p>
          Shift each letter through the alphabet and watch the
          transformation happen.
        </p>
      </div>
    </section>
    <div className="visualizer-container px-15 ">
      <div className="visualizer-content">
        <div className="visualizer-input py-2">
            <label htmlFor="inputText">Input Text:</label>
            <input type="text" id="inputText" placeholder="Enter text to encrypt" />
        </div>
        <div className="visualizer-input py-2">
            <label htmlFor="shiftValue">Shift Value:</label>
            <input type="number" id="shiftValue" placeholder="Enter shift value" />
        </div>
        <div className="visualizer-output py-2 flex  gap-2">
            <Button variant="outline" size="lg" className="hero-button">Encrypt</Button>
            <Button variant="outline" size="lg" className="hero-button">Decrypt</Button>
        </div>
        <div className="visualizer-output py-10">
            <label htmlFor="outputText">Output Text:</label>
        </div>
      </div>
    </div>
    <div className="visualizer-footer py-10 px-15">
      <p>Note: The Caesar Cipher is a simple substitution cipher and is not secure for modern encryption needs.</p>
    </div>
    </>
  );
}


export default Visualizer;