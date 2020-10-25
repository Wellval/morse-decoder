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

String.prototype.replaceAll = function (a, b) {
    let result = this;
    while(result.indexOf(a) !== -1) {
        result = result.replace(a, b);
    }
    return result;
}

function decode(expr) {
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        let bin = expr.substr(i, 10);
        if (bin[0] === '*') {
            result += " ";
        } else {
            let counter = 0;
            for (let j = 0; j < bin.length; ++j) {
                if (bin[j] === '0') {
                    counter++;
                } else {
                    break;
                }
            }
            bin = bin.substr(counter, bin.length - counter).replaceAll("11", "-").replaceAll("10", ".");
            result += MORSE_TABLE[bin];
        }
    }
    return result;
}

module.exports = {
    decode
}