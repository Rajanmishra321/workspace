console.log("hello world");
//console.log(a)

// var is datatype for decalre a variabe
/*var a = 1;
a = 2;
console.log(a);*/

// let is also a datatype which provide fesility to modify the data type later in the program
/*var b = 1;
b = 2;
console.log(b);*/


// it is also a datatype but it don't provide the fesility to change the value of varialbe; if we try it throws an error
/*const c = 1;
console.log(c);*/

// there are 3 types of datatypes int bool and string
/*let person_name = "rajan mishra";
let age = 18;
let relationship = true;
console.log("name of the person is " + person_name + " age of the person is " + age + " relationship status is " + relationship);
*/



//trying to use of if else statement
/*if (relationship == true) {
    console.log("this person is in relatiationship");
}
else {
    console.log("this person is't single");
}*/

//using loop and finding the sum of 0 100 
/*let ans = 0;
for (let i = 0; i <= 100; i++) {
    ans = ans + i;

}
console.log(ans); */


// using array
/*const person_age= [23,22,32,33,23];
let max= person_age[0];
for(let i=0; i<=person_age.length; i++)
{

    if(person_age[i]%2==0)
    {
        console.log(person_age[i]+" this person's age is even");
    }
}*/
 

/*finding the maximum number
const person_age = [23, 22, 32, 33, 23];
let max = person_age[0];
for (let i = 1; i <= person_age.length; i++) {

    if (person_age[i] > max) {
        max = person_age[i];
    }

}
console.log(max); */

//using object 

// const alluser = [
// {
//     firstname: "Rajan",
//     gender: "male",
//     age: 28,

// },{
//     firstname:"Raj",
//     gender: "male",
//     age: 37,

// },{
//     firstname:"priya",
//     gender: "female",
//     age: 38,

// }]
// for(let i=0; i<alluser.length; i++)
// {
//     if(alluser[i]["gender"]=="male")
//     {
//         console.log(alluser[i]["firstname"]);
//     }
//     else{
//         console.log(alluser[i]["firstname"]);
//     }
// }


// function in js
// function sum(a,b)
// {
//     return a+b;
// }
// const value=sum(1,2);
// console.log(value);


//callback function
/*function sum(a,b,call_to_function)
{
   let result= a+b;
    call_to_function(result)
}
function display(data)
{
    console.log(data)
}
const value=sum(1,2,display);*/


// using callback function
/*function sum( a)
{
    let ans=0;
    for(let i =0 ; i<=a ; i++)
    {
        ans = ans + i;
       
    }
    ans = print(ans)
    

}
function print(ans)
{
    console.log(ans)
}
sum(100)*/

// call back function vo find the square and the sum of the squared number
/*function square(n)
{
    let squa = n*n;
    return squa;
}
function cube(n)
{
    let cu = n*n*n;
    return cu;
}
function squareSum(a,b,fun)
{
    value1 = fun(a);
    value2 = fun(b)
    console.log(value1+value2)  
}
squareSum(2,3,cube);*/


//anonymous function 
function square(n)
{
    let squa = n*n;
    return squa;
}

function squareSum(a,b,fun)
{
    value1 = fun(a);
    value2 = fun(b)
    console.log(value1+value2)  
}
squareSum(2,3,function (n){ return n*n*n;} , );
