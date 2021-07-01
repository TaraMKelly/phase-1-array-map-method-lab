const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//console.log(tutorials);

function titleCased() {
  const caseTheTitles = tutorials.map(titles => {
    let splitTitle = titles.split(" ");
    let newTitles= splitTitle.map(words => words[0].toUpperCase() + words.substr(1));
    return newTitles.join(" ");
  })
  return caseTheTitles;
} 
console.log(titleCased());


// const titleCased = tutorials.map(titles => {
//       let splitTitle = titles.split(" ");//splits the string up 
//       let newTitles= splitTitle.map(words => words[0].toUpperCase() + words.substr(1));
//       //capitalizes the first letter of each word and then adds the rest of the word with substr(1)
//       return newTitles.join(" ");
//   })
//   console.log(titleCased);


