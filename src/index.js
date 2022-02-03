const singleArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tenToNineteenArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decaArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable (number) {
const numberString = number.toString();
if (numberString.length === 1) {
    let firstNumber = singleArr[numberString[0]];
    return `${firstNumber}`;
} else if (numberString.length === 2 && numberString[0] == '1') {
    let firstNumber = tenToNineteenArr[numberString[1]];
    return `${firstNumber}`;
} else if (numberString.length === 2 && numberString[0] != '1' && numberString[1] != '0') {
    let firstNumber = decaArr[numberString[0] - 2];
    let secondNumber = singleArr[numberString[1]];
    return `${firstNumber} ${secondNumber}`;
} else if (numberString.length === 2 && numberString[0] != '1' && numberString[1] == '0') {
    let firstNumber = decaArr[numberString[0] - 2];
    return `${firstNumber}`;
} else if (numberString.length === 3 && numberString[1] == '0' && numberString[2] == '0') {
    let firstNumber = singleArr[numberString[0]];
    return `${firstNumber} hundred`
} else if (numberString.length === 3 && numberString[1] == '0' && numberString[2] != '0') {
    let firstNumber = singleArr[numberString[0]];
    let secondNumber = singleArr[numberString[2]];
    return `${firstNumber} hundred ${secondNumber}`;
} else if (numberString.length === 3 && numberString[1] == '1') {
    let firstNumber = singleArr[numberString[0]];
    let secondNumber = tenToNineteenArr[numberString[2]];
    return `${firstNumber} hundred ${secondNumber}`;
} else if (numberString.length === 3 && numberString[1] != '1' && numberString[2] == '0') {
    let firstNumber = singleArr[numberString[0]];
    let secondNumber = decaArr[numberString[1] - 2];
    return `${firstNumber} hundred ${secondNumber}`;
} else if (numberString.length === 3 && numberString[1] != '1' && numberString[1] != '0' && numberString[2] != '0') {
    let firstNumber = singleArr[numberString[0]];
    let secondNumber = decaArr[numberString[1] - 2];
    let thirdNumber = singleArr[numberString[2]];
    return `${firstNumber} hundred ${secondNumber} ${thirdNumber}`;
} return number;
}