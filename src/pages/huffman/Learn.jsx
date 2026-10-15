import Header from "@/Header";
import { Separator } from "@/components/ui/separator";

const Learn = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="hero w-full md:w-1/2">
            <p className="eyebrow">COMPRESSION ALGORITHM</p>

            <div className="title">
              <h1>Huffman Coding</h1>
            </div>

            <p className="sub-title">
              A lossless data compression algorithm.
            </p>
          </div>
        </section>

        <Separator className="bg-gray-800" />

        {/* Description */}
        <section className="algo-description">
          <h2>What is Huffman Coding?</h2>

          <p>
            Huffman coding is a lossless data compression algorithm that uses
            variable-length codes to represent symbols based on their
            frequencies. The basic idea behinf Huffman coding is to assign shorter codes to more frequent characters and longer codeds to less frequent characters, thus reducing the overall size of the data. It assigns shorter codes to more frequent symbols
            and longer codes to less frequent symbols, resulting in efficient
            encoding and reduced storage space.
          </p>

          <p>
            The algorithm works by building a binary tree based on the
            frequency of each symbol. The resulting tree determines the
            variable-length binary code assigned to each symbol.
          </p>

          <h2>How It Works</h2>
        </section>
      </main>
    </>
  );
};

export default Learn;