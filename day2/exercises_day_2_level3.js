/* 
Exercises: Level 3
*/

// 1:'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
/*
Todo:
1- [x]Find love in the phrase
3- [X]Count love words repeats 
*/

let string =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.'; 
console.log(string.match(/love/gi).length);



// 2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let newString =
  'You cannot end a sentence with because because because is a conjunction';
console.log(newString.match(/because/g).length);  

// 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).

/* 
TODO:
1. Find regular expression for any character that is not a word character from basic latin alphabet
2. Try to math and capture all character
3. Replace character with white space 
*/

    const sentence =
      '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    const regex = /\W/g;
    // console.table(sentence.match(/\W/g)) 
    const cleanSentence = (sentence.replace(regex, ' '))
    console.log(cleanSentence);


// 4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const salaryText =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salaryPerMonth = parseInt(salaryText.match(5000)[0])
let annualBonus = parseInt(salaryText.match(10000)[0]);
let onlineCoursePerMonth = parseInt(salaryText.match(15000)[0]);

const totalAnualIncome = ((salaryPerMonth + onlineCoursePerMonth)* 12) + annualBonus 

console.log(`The total annual income is: $${totalAnualIncome}`)

