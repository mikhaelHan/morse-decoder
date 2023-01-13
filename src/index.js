const MORSE_TABLE = require('./data');

const decode = (expr) => {

    let fraser = '';

    let argMass = expr.split('');
    for (let i = 0; i < argMass.length; i += 10) {
        let chunk = argMass.slice(i, i + 10);
        if (chunk.join('') === '**********') { fraser += ' ' }
        else {
            let code = '';
            for (let k = 0; k < chunk.length; k += 2) {
                let word = chunk.slice(k, k + 2);
                if (word.join('') === '00') { continue }
                else if (word.join('') === '10') { code += '.' }
                else if (word.join('') === '11') { code += '-' }
            }
            fraser += MORSE_TABLE[code];
        }
    }
    return fraser
}

module.exports = {
    decode
}

