const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let res = '';
  for (let i = 0; i < expr.length / 10; i++) {
    let chunk = expr.slice(i * 10, i * 10 + 10);
    if (chunk[0] === '*') {
      res += ' ';
      continue;
    }
    let code = '';
    for (let j = 0; j < 10; j += 2) {
      if (chunk.slice(j, j + 2) === '10') code += '.';
      else if (chunk.slice(j, j + 2) === '11') code += '-';
    }
    res += MORSE_TABLE[code];
  }
  return res;
}

module.exports = {
  decode,
};
