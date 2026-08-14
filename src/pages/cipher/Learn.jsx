import "./cipher.css";
const Learn = () => {
  return (
    <>
      <div>
        <h1>Ceaser's Cipher</h1>
        <p>
          I learned about Ceaser's Cipher for the first time in Big Book Small
          Python Projects book by _____
        </p>
        <p>
          {" "}
          This cipher algortihm is the oldest encryption method used by Julius
          Caesar. It encrypts letters by shifting them over by a certain number
          of places in the alphabet.{" "}
        </p>
        <p>
          {" "}
          The Caesar Cipher demonstrates important concepts used throughout
          modern encryption:
        </p>
        <ul>
          <li> Character encoding</li>
          <li>Modular arithmetic</li>
          <li>Secret Keys</li>
          <li>Reversible Algorithms</li>
          <li>Brute-force attacks</li>
          <li>Frequency analysis</li>
        </ul>
        <p>
          {" "}
          Mastering this simple cipher builds intution for more advanced
          algorithms like Vigenere, AES and RSA
        </p>
      </div>
      <div>
        <h1>How it Works</h1>
        <p>
          Like most cipher programs, the Caesar cipher works by translating
          characters into numbers, performing some math operations on those
          numbers, and translating the numbers back into text characters.
        </p>
        <h2>Key Terms </h2>
        <ol>
            <li> Key- Length of the shift</li>
            <li>Symbols- Text characters</li>
        </ol>
        <h2>Step by Step Approach</h2>
        <ol>
          <li>Choose a shift value - also called the key </li>
          <li>Move each letter forward by that amount</li>
          <li>Wrap around after Z back to A</li>
          <li>Preserve spaces and punctuation</li>
        </ol>
        <h2>Formula</h2>
        <h3>Encryption</h3>
        <p>E(x) = (x + k) mod</p>
        <h3>Decryption</h3>
        <p>D(x) = (x - k) mod</p>
        <p>Where: </p>
        <ul>
            <li>x= current letter</li>
            <li>k= shift amount</li>
            <li>26= amount of letters in the English alphabet</li>
        </ul>
        <h1>Alphabet Wheel</h1>
      </div>
    </>
  );
};
export default Learn;
