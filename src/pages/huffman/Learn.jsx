import Header from "@/Header";
import { Separator } from 'src/components/ui/separator'
const Learn = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-x-10 min-h-[50vh] w-full max-w-57xl mx-auto px-6">
        <div className="hero w-full md:w-[50%]">
          <div>
            <p>COMPRESSION ALGORITHM</p>
          </div>
          <div className="title flex flex-col gap-2">
            <h1>Huffman Encoding</h1>
          </div>
          <div className="sub-title">
            <p>
              The oldest encryption method on record- attirbuted to Julius
              Caesar
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-[40%] relative min-h-[300px] md:min-h-full [mask-image:radial-gradient(circle,black_60%,transparent_100%)] pt-15">
          <div class="disk-section"></div>
        </div>
      </div>
      <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
      <div className="algo-description p-5">
        <h1>What is Huffman Encoding ? </h1>
        <br/>
        <p> The Caesar Cipher is one of the simplest and earliest encryption methods, substituting letters by shifting them a fixed number of positions in the alphabet, laying the foundation for modern cryptographic techniques. While the Caesar Cipher is easy to implement and useful for educational purposes, its limited keyspace and vulnerablity to brute force and frequency analysis make it unsuitable for serious encryption needs.</p>
        <br/>
        <p> In the Caesar Cipher, letters in plain text are replaced by other letters or symbols by shifting them a fixed number of positions in the alphabet. This encryption falls under Substitution ciphers.</p>
        <br/>
        <h1>How it Works</h1>
      </div>
    </>
  );
};
export default Learn;
