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
  age:20
}
typeof(student)# object
student.name # dot syntax
or student['name'] # box syntax

var marks=[1,2,4534,5]
typeof(marks) # object
20/0 # infinity

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
    - var is not block scope

```js
{
  var x1 = 10;
  let x2 = 20;
}
console.log(x1); // output=10
console.log(x2); //error
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
console.log(x1 + +x2); // 10

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

# Types of functions:

functions use-modular:add or remove the things you want easily. for doing any changes when we change the code that will be refelected in all without changing all the code.
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
}
 or
 const double= (n) => n*2; //in one line (n*2 will be returned)

  ##  with 2 parameters:
  function sum(a,b){
    return a+b;
  }

  const sum1=(a,b)=> a+b;
```

> NOTE: DRY

# code quality:

> there are 5 pillers to measure code quality.

1.  readibility--should be understood by others anf for u in future
2.  Maintianibility-code debt-tomorrow never come
3.  Extensibility-can be able to add new features
4.  Testability
5.  performance (space and time complixity)
