# intro to the werb development

## browser wars

the war eas between netscape and IE

## 3 layer arch

- FE

# selector

```css

      .fun {
        color: rgb(231, 25, 25);
      }
      ``
```

[HTML status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

> to kepp hte text in the block

to keep an image in the note use-!:
![image](https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg)

> ./  
> .-> current directory
> /-> file name
> ctrl+ shift+p---for all short cuts (search for all short cuts)
> ctrl+spcae --auto complete
> ctrl+/--comment
> window + . ---emojis

"atl" attiribute--haev 3 uses

1.  when page is not loaded
2.  for the persons whoc cant see
3.  soc rating(in searching rating)

# webp--

it is an extension for image simislar to jpg etc
but this helps to reduce the size of the image wihtout change in the quality.

# svg(Scalable Vector Graphics)

Advantages of SVG files.

- Unlike raster files, which are made up of pixels, vector graphics like SVGs always maintain their resolution — no matter how large or small you make them. You don't have to worry about SVG images losing their quality in certain browsers or when you resize them to appear in different places.
- its smaller file sizes and ability to be scaled without losing quality.
- supported by all the browsers
- doesnot break when zoom in or zoom out.
- it uses mathemitical formulas rather than pixels.
- logos are generally svg.

```JS
var x=10
typeof(x)
/* dictionary*/
var student={
  name:"diana"
  age:201
}
typeof(student)# object
student.name # dot syntax
or student['name'] # box syntax

var marks=[1,2,4534,5]
typeof(marks) # object
20/0 # infinity
typeof(Infinity) # number

   var z;
   typeof(z) # undefined
   var c=null;
   typeof(c) # object

   var name="a"
   var name="b" ##allow
   let name="f"
   let name="o" ## not allowed
   const name="p"
   const name="k" ## not allowed
   var name="a"
   name="b" ## allowed
   let name="l"
   name="y" ## allowed
   const name="Q"
   name="h" ## not allowed


   const marks=[1,2,3,4];
   marks[0]=8; // posiible becoz not changing the address
   marks=[4,5,6,7]; // not allowed becoz the address will change
```

> # data types:
>
> string,number,boolean,objects,undefined

- tpye of an unassigned values is undefined.
- but the data type of a null value is object---->they know - that it is bug but they dont fix.

> redeclaration is not possible in let and const works only in var.
> reassignment is alloed in var and let, wont allow in const

- python tutor-for visual execution

# SCOPE:

> life time of variable

    - tell u the area where the variable  can be accessed.
    - {}----block
    - let & const are  -block scope
    - var is not block scope ,it is a function scope.

```js
{
  var x1 = 10;
  let x2 = 20;
}
console.log(x1); // output=10
console.log(x2); //error(notdefined)
```

> undefined---value //when we declare a var but not assigned any value then there we will get undefined
> not defined-- error // we didinot even declared it so not defined
> var--- is function scope

# Conversions

```js
function fun() {
  var x1 = 10;
  let x2 = 20;
  console.log(x1); // output= 10
  console.log(x2); // 20
}
console.log(x1); // output= not defined (error)
console.log(x2); // not defined(error)

var x1 = 5;
var x2 = "5";
console.log(x1 + x2); //operative overloading (contact or addition)  concat is prior.
console.log(x1 - x2); // only one operation subtract (implicit typecasting or coersion)
console.log(x1 + parseInt(x2)); //output=10 (we are doing explicit type casting)
console.log(x1 + +x2); // 10  even if didnot type cast also the output will be 10

[2, 4, 5] + "abc"; // output--2,4,5abc
```

> explocit typecasting--

> js only knows concation--converting into string each element

```
[]+[]=' '
null+5==5 //null will be converined into 0, only for null, others will be conerted into string and concatination.

4+ "5a" //NAN--it is not able to convert 5a into number so the output is NAN-not a number.

typeof(NAN) // number

```

# === //faster - doesnot allow conversion

The strict equality operator (===) checks for the equality of two values without performing any type conversion. This means that if the values being compared have different data types, === will return false.  
 x1=5
x2="5"
x1===x2 // false

# == //slower -checks values--conversion + check

console.log(1 == "1"); // true and console.log(1 === "1"); // false.

In the first example, JavaScript will convert the string "1" to the number 1 before comparing it to the number 1. This results in the expression evaluating to true.
In the second example, JavaScript will not convert the string "1" to the number 1 because the strict equality operator (===) is being used. This results in the expression evaluating to false.

# Terms of functions:

# Types of functions:

functions use-modular:add or
remove the things you want easily. for doing any changes when we change the code that will be refelected in all without changing all the code.
parameters and arugments
fun(a){
} // a parameter
fun(8)// 8 is augment

## normal function

> exit the funtion 2 ways:

- when the rrturn statement is executed
- or else when all the statements are executed

```function defination or declaration:
function functionname(n){
  return 0;
}
```

## arrow function

```
const double =(n) => {
  return n*2
};
 or
 const double= (n) => n*2; //in one line (n*2 will be returned)

  ##  with 2 parameters:
  function sum(a,b){
    return a+b;
  }

  const sum1=(a,b)=> a+b;
```

> NOTE: DRY

# annomous function:

# code quality:

> there are 5 pillers to measure code quality.

1.  readibility--should be understood by others anf for u in future
2.  Maintianibility-code debt-tomorrow never come
3.  Extensibility-can be able to add new features
4.  Testability
5.  performance (space and time complixity)

# cpoy by address:

t2=t1;

# copy by value:

var q1=[1,2]
var q2=[...q1]; //spread operator(...)
var q3=[9, ...q1,8] //9,1,2,8

# for loops

- noraml for loop

> const marks=[8,9,2,3,4]
> for(let i=0;i<marks.length;i++){
> console.log("i :" ,i, "marks: ",marks[i])  
> }

- # for in loop:
  > code is more readable and simple  
  > for (let j in marks){
        console.log("Index: ",j,"marks: ",marks[j])
  }

# for of loop:

> // readable and cleaner

```
for (let mark of marks){
   console.log("marks: ",mark)
}
```

# 31-05:

## ES6 features

> let & const

## objects methods: 2

> let salaries={
> john: 100,
> id: 2,
> };
> Object.keys(); // to get keys alone
> Object.values(); // to get values alone # O id capital
> Object.keys(salaries); //output- john,id
> Object.values(salaries); // output-

```
let salaries={
    john: 100,
    mary:200,
    diana:300,
};
console.log(Object.keys(salaries));
console.log(Object.values(salaries));
```

## Template Literal:+intrepolation,multiline

> interpolation=substituion($ symbol)
> it suppeots multiple lines syntax

```
function fullname(fn,ln){
return "welcome ", fn,", ",ln;
}
function fullname(fn,ln)
{
return `welcome${ln},${ln}`
};
```

> REFECTORING:

- not adding any new features,but quality will be better
- quality better, functionality same.
- to reduce code debt.

# Destructuring: means unpacking

> unpacing values from array

```
const [t1,t2]=[100,200]; # not creating an array
t1=100 // data type of t1 is number
t2=200
const [t1,t2,t3]=[100,200];
t1=100
t2=200
t3=undefined
const [t1,t2,t3=80]=[100,200];
t1=100
t2=200
t3=80
const [t1,t2,t3=80]=[100,200,500];
t1=100
t2=200
t3=500 # it will take default alue only if it t3 undefined

const [t1,t2,t3=80]=[100,200,null]
t3=null (since null is not undefined so t3 will not take undefined)
const [t1,t2,t3=80]=[100,200,undefined]
t3=80
const [,t1,t2,t3=80]=[100,200,null]
console.log(t1,t2,t3)
t1=200
t2=null
t3=80
const [,t1,t2,t3=80]=[100,200,null]
console.log(t1,t2,t3)
t1=200
t2=null
t3=80
NOTE: when we want to skip any value we can keep , there to skip that is called as holes--skipping the values.
```

# Object Destructuring:similar to array destructioning but here it is mapped with keys there with index

```
> const {name,network,power}={
> name: "abc",
> house: aJDH,
> NETWORTH: "349823",
> power: "gsd"
> }
> console.log(name)//abc
> console.log(network)//49823
> console.log(power)//gsd
```

```
numeric seperator: to improve DX
var num=1_00_00_000;
num=10000000
```

## ternatery operator:-- ? :

> 3 operands thats why called ternary  
> all arthmitic opertors are binary operator  
> &&, ||  
> unary operators:  
> ++ , --, !

# Truthy Vs Falsy:

- value converts into true-truthy
- value converts into false- falsy
  > Note: falsy values=false,0,null,-0, undefined,NAN,""

```
let x="cool" //for 0,null answer will be nope
if (x)
{
  console.log("hey");
}
else {
  console.log("nope);
}
```

var final=140 || 150
final=140

## ??--->nullish coaliation

> similar as ||  
> only null and undefined are considered as falsy for nullish

# rest //... here is called rest

var [t1,t2, ...t3]=[10,20,30,40,50,60]
t1-10
t2=20
t3=[30,40,50,60] --collect all the remaining values or rest of the values
t3--datatype object

# Inbuilt Method in JS

## String methods:

> toupperCase()  
> toloweCase()  
> split--to covert a string to array  
> ex: "this is a beautiful day".split(" ")//" "-- is the separator  
> to do opposite -join  
> ['this','is','day'].join("|");//join is the array method  
> output: 'This|is|day--join converting array to string  
> to get every character as element string.split("");//with empty string
>
> # arrays methods:
>
> reverse,push,slice,join
> array.slice(2,3)//similar to python  
> slice-->copy by value

# SDLC

1. planning-in strat ups CEO will do
2. Analysis- is it technically possible / Business and Technical Analysis
3. Design- Figma Adobe Xd Sketch ,like a broader stroke, we can makw changes easily rather than in code. code cant be understand by everyone, so the design will be easy to understand ny others also gives some advices like text color etc.Autolayout and varinace.
4. Implementation-
5. Testing & Integration -
6. Maintanance- support team,

## Stakeholders--

### product manager, team leads, cto,

> if anything ges wrong they are the people who called 1 st
> the people who are taking risk
> responsible for adding make of product, new features

# Stackholders:

## Analysis--Project Manager, CTO

## Design- System Archicture

> decide what should be the front end(angular,react) ,backend(java,python,node js) and blue print of the project

## Development- Front-end Developer, Back-end Developer

## Testing - Tester,DevOps, QA Engineer

## Deployment- DevOps, Data Administrator

## Maintenance- Users,Testers,Support managers

PM+CEO+Designer====business analysis
PM+ CTO== Techinal analysis

## Water Fall mathodology:

> sequential,migration (angular to react)  
> railyway tracks ,(toyoto car gears)  
> 2 releases in a year (6 months process)

## Agile:

> cylic pattern  
> no need to do monthly release  
> scrum is the implementatin of agile
> included customer in every step  
>  12 releases in a year  
> 2 sprints a month(1-sprint dev, 1 sprint- testing)

# scrum: Implementation of agile

> sprint planning - takes 1 hour, each task is divided into small chunks and assigned to team memebers.  
> story points--- days taken to complete the task  
> blocker--ant able to finsh the task in story time beacuse of geninue reason or blocked.

## Daily scrum / Stand up

> 10-15 mins  
> what happened yestarday, what going to do today.

## sprint review meeting:

> after 14 days  
> retrospective-- what went wrong(happens for 1 hour)

![img](image.png)
![img2](image-1.png)

# Kan ban board:

> jera tool

![kanban](image-2.png)

# Burn down chart:

![chart](image-3.png)

> IN this burn down chart if the task(story points) is not completed in assigned timme
> then that will be forwarded to next sprint---called as spill over
> ![spill over](image-4.png)

# coding standards in js:

> code quality  
> variables names, function names --camel case  
> // camel case==abcDed
> // pascal case==CarEngine
