    const Caesar = (string, key) => {
        if (typeof string !== "string" || typeof key !== "number"){
            throw new Error('Invalid string or key!');
        }

        let code = "";
        for (var i = 0; i < string.length; i++) {
            const index = string.charAt(i);
            if (Number(index) || index === "0"){
                code += shiftNumber(index, key);
            } else if (index.match(/[a-z]/i)) {
                code += shiftLetter(index, key);
            } else {
                code += index;
            }
        }

        return code;
    }

    const shiftLetter = (letter, key) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let code = letter.toLowerCase();

        if ((alphabet.indexOf(code) + key) > 25) {
            let rollOver = (alphabet.indexOf(code) + key) % 26;
            code = alphabet.charAt(rollOver);
        } else if ((alphabet.indexOf(code) + key) < 0){
            let rollUnder = 26 - Math.abs((alphabet.indexOf(code) + key) % 26);
            code = alphabet.charAt(rollUnder);
        } else {
            code = alphabet.charAt(alphabet.indexOf(code) + key);            
        }

        if (letter.toUpperCase() === letter) {
            return code.toUpperCase();
        } else {
            return code;
        }
    };

    const shiftNumber = (num, key) => {
        const numbers = "0123456789";
        if ((numbers.indexOf(num) + key) > 9) {
            let rollOver = (numbers.indexOf(num) + key) % 10;
            return rollOver;
        } else if ((numbers.indexOf(num) + key) < 0) {
            let rollUnder = numbers.length - Math.abs((numbers.indexOf(num) + key) % 10);
            return rollUnder;
        } else {
            return numbers.indexOf(num) + key;
        }
    }

export default Caesar;