import Header from "@/Header";
import { Button } from "@/components/ui/button";
import { Cipher,Decipher } from "./cipher";
import { useState } from "react";
const Visualizer = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("");
  const [result, setResult] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleShift = (event) => {
    setShift(event.target.value);
  };
  const encrypt = () => {
    const encryptedText = Cipher(text, shift);
    setResult(encryptedText);
  };
  const decrypt = () => {
    const decryptedText = Decipher(text, shift);
    setResult(decryptedText);
  };
  const clear = () => {
    setText("");
    setShift("");
    setResult("");
  };
  return (
    <>
      <Header />
      <section className="visualizer px-15 py-25">
        <div className="visualizer-heading">
          <p className="eyebrow">INTERACTIVE VISUALIZER</p>
          <h2>Caesar's Cipher</h2>
          <p>
            Shift each letter through the alphabet and watch the transformation
            happen.
          </p>
        </div>
      </section>
      <div className="visualizer-container px-15 ">
        <div className="visualizer-content">
          <div className="visualizer-input py-2">
            <label htmlFor="inputText">Input Text:</label>
            <input
              type="text"
              id="inputText"
              placeholder="Enter text to encrypt"
              value={text}
              onChange={handleText}
            />
          </div>
          <div className="visualizer-input py-2">
            <label htmlFor="shiftValue">Shift Value:</label>
            <input
              type="number"
              id="shiftValue"
              placeholder="Enter shift value"
              value={shift}
              onChange={handleShift}
            />
          </div>
          <div className="visualizer-output py-2 flex  gap-2">
            <Button
              variant="outline"
              size="lg"
              className="hero-button"
              onClick={encrypt}
            >
              Encrypt
            </Button>
            <Button variant="outline" size="lg" className="hero-button" onClick={decrypt}>
              Decrypt
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hero-button"
              onClick={clear}
            >
              Clear
            </Button>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <label className="font-medium">Output Text</label>

            <div className="min-h-[52px] w-1/4 border border-black/20 bg-[#f4ede4] px-4 py-3">
              {result || "Your encrypted text will appear here"}
            </div>
          </div>
        </div>
      </div>
      <div className="visualizer-footer py-10 px-15">
        <p>
          Note: The Caesar Cipher is a simple substitution cipher and is not
          secure for modern encryption needs.
        </p>
      </div>
    </>
  );
};

export default Visualizer;
