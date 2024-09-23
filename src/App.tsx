

function App() {

  class ShiftCipher {
    msg: string;
    cipher: number;
    alphabet: string[];
    constructor(msg : string, cipher: number) {
      this.msg = msg;
      this.cipher = cipher;
      this.alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
    }

    encrypt() {
      const encrypted = [];

      for (let i = 0; i < this.msg.length; i++) {
        let letter = this.msg[i].toUpperCase();
        const idx = this.alphabet.indexOf(letter);

        if (letter === this.alphabet[idx]) {
          if (idx + this.cipher > this.alphabet.length - 1) {
            encrypted.push(
              this.alphabet[
                (this.cipher + idx) % 25 === 0
                  ? (this.cipher + idx) % 25
                  : ((this.cipher + idx) % 25) - 1
              ]
            );
          } else {
            console.log("i have run");
            encrypted.push(this.alphabet[idx + this.cipher]);
          }
        } else {
          encrypted.push(letter);
        }
      }

      console.log(encrypted);
      return encrypted.join;
    }
  }

  const msgEnc1 = new ShiftCipher("hello", 26);
  msgEnc1.encrypt();

  return (
    <>

    </>
  )
}

export default App
