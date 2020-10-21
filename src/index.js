module.exports = function toReadable (number) {
  let numbersARR = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let arroOfTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
'seventy', 'eighty', 'ninety'];
if(number === 0){return 'zero'}
if(number <= 20){return numbersARR[number]}
if(number < 100 && number > 20){return (`${arroOfTens[Math.trunc(number/10)]} ${numbersARR[number%10]}`).trim()}
if(number >= 100){return (`${numbersARR[Math.trunc(number / 100)]} hundred ${((number % 100) >= 21 ? arroOfTens[Math.trunc((number %100) / 10)]  + 
' ' + numbersARR[(number % 100) % 10] : numbersARR[number % 100])}`).trim()}
}
