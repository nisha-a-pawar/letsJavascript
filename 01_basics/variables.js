const accountId =144553;
let accountEmail ="hp@gmail.com";
var accountPassword ="Hp@121121";
accountCity = "Bengaluru";
let accountState ;
//accountId = 12232;   // not allowed  - Assignment to constant variable can not be possible.
console.log(accountId);  //prints accountId on console
console.table([accountId ,accountEmail ,accountPassword, accountCity]); //prints everything in array in tabular form

accountEmail="hitesh@gmail.com";
accountPassword="hiteSH@1233";
accountCity="Mumbai";


console.table([accountId ,accountEmail ,accountPassword, accountCity, accountState]);

/*  This is multiline comment
// this is single line comment

1.Can not update value of a const 
2.let and var both allocate memory to a variable and can be assigned to a new value just the difference is of scope.
better to use let always.



*/