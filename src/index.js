const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = expr.match(/.{1,10}/g);

    for (let i = 0; i < result.length; i++) {
      if (result[i].includes("*")) continue;
      else result[i] = parseInt(result[i], 10);
    }
    //  let divided = (result[0]).toString().match(/.{1,2}/g)

    const sweeterArray = result.map((element) => {
      return element.toString().match(/.{1,2}/g);
    });

    let res = [];

    for (let k = 0; k < sweeterArray.length; k++) {
      for (let j = 0; j < sweeterArray[k].length; j++) {
        if (sweeterArray[k][j] === "10") sweeterArray[k][j] = ".";
        if (sweeterArray[k][j] === "11") sweeterArray[k][j] = "-";
        if (sweeterArray[k][j] === "**") sweeterArray[k][j] = " ";
      }
    }

    let arr = sweeterArray.map((element) => {
      return element.join("");
    });

    let morse = arr.map((el) => MORSE_TABLE[el]);

    morse.forEach((item, index) => {
      if (item === undefined) morse[index] = " ";
    });

    morse = morse.join("");
    return morse
}

module.exports = {
    decode
}