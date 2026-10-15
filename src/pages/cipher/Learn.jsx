import Header from "@/Header";
import "./cipher.css";
import { Separator } from "src/components/ui/separator";
const Learn = () => {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="hero w-full md:w-1/2">
          <p className="eyebrow">CRYPTOGRAPHY</p>

          <div className="title">
            <h1>Caesar's Cipher</h1>
          </div>

          <p className="sub-title">
            The oldest encryption method on record- attirbuted to Julius Caesar
          </p>
        </div>
      </section>
      <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
      <div className="algo-description p-5">
        <h1>What is Caesar's Cipher ? </h1>
        <br />
        <p>
          {" "}
          The Caesar Cipher is one of the simplest and earliest encryption
          methods, substituting letters by shifting them a fixed number of
          positions in the alphabet, laying the foundation for modern
          cryptographic techniques. While the Caesar Cipher is easy to implement
          and useful for educational purposes, its limited keyspace and
          vulnerablity to brute force and frequency analysis make it unsuitable
          for serious encryption needs.
        </p>
        <br />
        <p>
          {" "}
          In the Caesar Cipher, letters in plain text are replaced by other
          letters or symbols by shifting them a fixed number of positions in the
          alphabet. This encryption falls under Substitution ciphers.
        </p>
        <br />
        <h1>How it Works</h1>
        <br />
        <p>
          {" "}
          The Caesar Cipher works by shifting each letter in the plaintext by a
          fixed number of positions down the alphabet. For example, with a shift
          of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. When the end of the
          alphabet is reached, it wraps around to the beginning. This method
          creates a simple substitution cipher that can be easily decrypted if
          the shift value is known.
        </p>
        <br />
        <p>
          Example of a shift of 3:
          <br />
          Plaintext: HELLO
          <br />
          Ciphertext: KHOOR
        </p>
        <p>Description ; -</p>
      </div>
    </>
  );
};
export default Learn;
