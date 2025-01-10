/*Datatypes
Datatypes are mainly categorised into two types
Datatypes are categoriesed based on how they are stored in memory and how accesed*/

//1.Primmitive
 // 7 types => String,Number,Boolean,undefined ,null,Symbol,BigInt
let score =100;
let scoreValue = 100.5;
let name = "Nisha";
const isLoggedIn =true;
let isPresent;
const marks = Symbol('123')
const marks2 = Symbol('123')
console.table([score,scoreValue,name,isLoggedIn,isPresent,marks,marks2])
console.log(marks === marks2)

  

  //2.Non Primittive /Reference types
  // types -> Objects ,array ,functions
    
    let heros =["shaktimaan","Hanuman","Aryaman"]

    let myobj ={
      name:"Nisha",
      city:"Sangli",
      email:"np@gmail.com"
    }

   const myFunction= function(){
     console.log("Hello World");
    }

    
    console.log(typeof heros);
    console.log(typeof myobj);
    console.log(typeof myFunction);
    
 //  Javasvript is dynamically binded or statically binded ?
 //  ->


 //--------------------------------------------------------------------------------------------------------
 //Memory allocation in javascript
 /* There are two ways to store memory in js
  1.stack -all Primittive types are stored in stack .and we get a copy of the data while performing operations on it */
  let myYoutubeName ="hiteshcodes.com";
  let anotherName =myYoutubeName;
  anotherName ="chaiaurcode";
  console.log(myYoutubeName);
  console.log(anotherName);

  
//2.Heap -All non primittive data stored in heap memory .It references to the same reference no copy provided.

let userOne ={
  email:"test@gmail.com",
  city:"Bengaluru"
}

let userTwo =userOne;
userTwo.email="develop@gmai.com"
console.log(userOne);
console.log(userTwo);


   





