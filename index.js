const round = function (number, precision) {
    let numberString = number.toString();
    if (numberString.indexOf('.') < 0) {
        numberString += '.';
        for (let i = 0; i <= precision; i++) {
            numberString += '0';
        }
    }

    const dotIndex = (numberString.indexOf('.') - 1);
    const lastRoundingNumberIndex = numberString.indexOf('.') + precision;
    numberString = numberString.replace('.', '');
    const newNumberArray = [];

    let rest = 0;
    let dotIsPushed = false;
    for (let i = (numberString.length - 1); i >= 0; i--) {
        let currentNumber = Number(numberString[i]) + rest;
        let currentNumberString = currentNumber.toString();
        rest = 0;

        if (currentNumber > 9) {
            rest += Number(currentNumberString.substr(0, currentNumberString.length - 1));
            currentNumberString = currentNumberString[currentNumberString.length - 1];
            currentNumber = Number(currentNumberString);
        }

        if (i === dotIndex) {
            newNumberArray.push('.');
            dotIsPushed = true;
        }

        if (i >= lastRoundingNumberIndex) {
            if ((i === lastRoundingNumberIndex) && (currentNumber >= 5)) {
                rest += 1;
            }
            newNumberArray.push('0');
        } else {
            if ((i < (lastRoundingNumberIndex - precision)) && !dotIsPushed) {
                newNumberArray.push('.');
                dotIsPushed = true;
            }
            if (currentNumber > 9) {
                rest += 1;
                newNumberArray.push('0');
            } else {
                newNumberArray.push(currentNumberString);
            }
        }
    }

    if (rest) {
        rest = rest.toString();
        for (let i = (rest.length - 1); i >= 0; i--) {
            newNumberArray.push(rest[i]);
        }
    }
    return Number(newNumberArray.reverse().join(''));
};


module.exports = {round: round};
