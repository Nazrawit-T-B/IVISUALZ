export function Cipher(text, shift) {
    shift=Number(shift)
  return text
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) {
        return char;
      }
      const base = char === char.toUpperCase() ? 65 : 97;
      return String.fromCharCode(
        (((char.charCodeAt(0) - base + shift) % 26) + 26) % 26 + base
      );
    })
    .join("");
}

export function Decipher(text, shift) {
  return text
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) {
        return char;
      }
      const base = char === char.toUpperCase() ? 65 : 97; // Changed to === for consistency
      return String.fromCharCode(
        (((char.charCodeAt(0) - base - shift) % 26) + 26) % 26 + base
      );
    })
    .join("");
}
