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
    let massExpr = expr.split('');
    for (let i = 0; i < massExpr.length; i += 10) {
        let chunk = massExpr.slice(i, i + 10);
        if (chunk.join('') === '**********') { res += ' ' }
        else {
            let cod = '';
            for (let k = 0; k < chunk.length; k += 2) {
                let word = chunk.slice(k, k + 2);
                if (word.join('') === '00') { continue }
                else if (word.join('') === '10') { cod += '.' }
                else if (word.join('') === '11') { cod += '-' }
            }
            res += MORSE_TABLE[cod];
        }
    }
    return res
}

module.exports = {
    decode
}