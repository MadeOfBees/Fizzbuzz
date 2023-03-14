const fs = require('fs');
let maxNumber = 1000;
if (process.argv[2]) maxNumber = Number(process.argv[2]);
const fizzArray = [];
const isDivBy3 = (num) => num % 3 === 0;
const isDivBy5 = (num) => num % 5 === 0;

const spellNumber = (num) => {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ['', "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const bigNums = ['', "Hundred", 'Thousand', 'Million', 'Billion'];
    if (num > 1000000000000) {
        return "Number too large";
    }
    if (num < 1) {
        return "Number too small";
    }
    if (num < 10) {
        return ones[num];
    }
    if (num < 20) {
        return teens[num - 10];
    }
    if (num < 100) {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
    if (num < 1000) {
        return ones[Math.floor(num / 100)] +  " " + bigNums[1]  + " " +  spellNumber(num % 100);
    }
    if (num < 1000000) {
        return spellNumber(Math.floor(num / 1000)) + " " +bigNums[2] + " " + spellNumber(num % 1000);
    }
    if (num < 1000000000) {
        return spellNumber(Math.floor(num / 1000000)) + " " + bigNums[3] + " " + spellNumber(num % 1000000);
    }
    if (num < 1000000000000) {
        return spellNumber(Math.floor(num / 1000000000)) + " " + bigNums[4] + " " + spellNumber(num % 1000000000);
    }
    else {
        return "Error";
    }
}

for (let i = 1; i <= maxNumber; i++) {
    if (isDivBy3(i)) {
        if (isDivBy5(i)) {
            fizzArray.push("fizzbuzz");
        }
        else {
            fizzArray.push("fizz");
        }
    }
    else if (isDivBy5(i)) {
        fizzArray.push("buzz");
    }
    else {
        fizzArray.push(spellNumber(i));
    }
    if (i === maxNumber) {
        fs.writeFile('fizzbuzz.txt', fizzArray.join(',\n'), function (err) {
            if (err) throw err;
            console.log('The file has been saved!');
            return
        });
    }
}