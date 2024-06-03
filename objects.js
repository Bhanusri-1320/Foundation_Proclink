let salaries = {
  john: 100,
  mary: 200,
  diana: 300,
};
console.log(Object.keys(salaries));
console.log(Object.values(salaries));
// function fullname(fn,ln){
//     return  "welcome ", fn,", ",ln;
//    }
function fullname(fn, ln) {
  return `welcome ${fn} ${ln}`;
}
console.log(fullname("b", "h"));

// Task 5
const movieUrl = (domain, genre, year) => {
  return "http://" + domain + "?genere=" + genre + "&year=" + year;
};

console.log(movieUrl("imdb.com", "thriller", 2020));

//
const MovieUrl = (domain, genre, year) => {
  return ` http://${domain}?genere=${genre}&year=${year}`;
};
console.log(MovieUrl("imdb.com", "thriller", 2020));

//

const Movieurl = (domain, genre, year) =>
  ` http://${domain}?genere=${genre}&year=${year}`;

console.log(Movieurl("imdb.com", "thriller", 2020));

// Task 6

function transformSentence(s) {
  s = s.toUpperCase();
  var arr = s.split(" "); //
  arr = arr.reverse(" ");
  return arr.join(" ");
}
let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);
console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"
function transformSentence1(s) {
  // s=s.toUpperCase();
  // var arr=s.split(" ");//
  // arr=arr.reverse(" ");
  // return arr.join(" ");
  return s.toUpperCase().split(" ").reverse(" ").join(" ");
}
let sentence1 = "Hello world from JavaScript";
let transformed1 = transformSentence1(sentence1);
console.log(transformed1);

// using arrow function
const fun = (s) => s.toUpperCase().split(" ").reverse(" ").join(" ");
console.log(fun("hello world"));
// Task 7: Improving code quality

function processNames(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase().split(" ");
    // let nameParts = upperCaseName.split(" ");
    let joinedName = upperCaseName.join("_");
    result.push(joinedName);
  }
  return result;
}
const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));
//2
function processNames1(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase().split(" ").join("_");
    result.push(upperCaseName);
  }
  return result;
}
const namesArray1 = ["john doe", "jane smith", "alice jones"];
console.log(processNames1(namesArray1));

// 3

function processNames2(names) {
  let result = [];
  for (let name of names) {
    result.push(name.toUpperCase().split(" ").join("_"));
  }
  return result;
}

const namesArray2 = ["john doe", "jane smith", "alice jones"];
console.log(processNames2(namesArray2));
