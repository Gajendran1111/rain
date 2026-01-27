// function 
// syntax 

// function name(){}


function mrg (){
var a = 10;
var a = 20;
console.log(a);


let b = 25;
b = 30;
console.log(b);


const c = 40;
console.log(c);

}
mrg();


// function types 

// Function  statement Declaration  --parameter & argument 

function fun (js){
    console.log(js);
}
fun("hello world");
// Function Expression or Anonymous Function 
let hi = function jj (a){
    console.log(a)
}
hi("welcome")

let str = function (b){
    console.log(b);
    
}
str("Anonymous function");
// Immediate Invoke Function expression  

(function(iife){
    console.log(iife);
    
})("immediate");
// Arrow Function

// syntax 

// ()=>{}

    let a = (aro)=>{console.log(aro)}
    a("arrow function");
    