// function isPalindrome(str){
//     let revStr=""; //!Imp
//     for(let i =str.length-1;i>=0;i--){
//         revStr+=str[i];
//     }
//     console.log(revStr)
//     if(str==revStr){
//         console.log("Palindrome")
//     }else console.log("Not  palindrome")
// }
// isPalindrome('madam')


//* Types of functions

//~ Named function
// function namedFunction(){
//     console.log("I have a name")
// }
// namedFunction()

//~ Anonymous function

// function(){
//     console.log("I dont have a name")
// }
// (); //!Not Posiible to execute

// ~ Function expresion

// let x = function(){
//     console.log("Iam an Anounymous function")
// }
// console.log(x); // ! function body will be printed since x stores the function body
// x();//! to execute the function - we have to use x();

//~ IIFE
// (
//     function(){
//       console.log("IIFE");
//     }
// )()();

//~ Arrow function

// let demo=()=>{console.log('Arrow function')}
// demo();
// let demo1=_=>{console.log('Arrow function')}//^ can use _ instead of ()
// demo1();
// let demo2=()=>console.log('Arrow function')//^ can remove{}
// demo2();
// leta=10
// let demo3=a=>console.log(a)//^can remove() if we have only one parameter
// demo3();
// let b=11,c=12;
// let demo4=(a,b)=>console.log(a,b)//^ use only when there are two
// demo4();

//&& return - implicit return , explcit return 
// function add(a,b){
//     console.log("Executable")
//     return a+b;// !Explicit return 
//     console.log("Not executable")
// }
// let x = add(5,5);
// console.log(x);//^explicit
// let a=10;
// let b=10;
// let y = (a,b) => {return a+b};
// y();//^implicit



//~ Higher order function
// function hof(a){ //^ a has function body and returns function body only.executes only if invoked. (a())
//     return a();
// }
// let x = hof(function(){return "This is callback function"});
// console.log(x)
//&example
// let a = function(){'This is anonymous'}
// a();
//!Callback function
// function add(callback){
//     return callback(5,10);
// }
// let x = add(function(a,b){return a+b})
// console.log(x)
//~ map function
//^Difference between forEach and map
//^map can return but forEach does not.
// let users = ['name1','name2','name3','name4','name5'];
// let x = users.map((user)=>{
//     return user;
// })
// console.log(x);
// let users2 = ['name1','name2','name3','name4','name5'];
// let y = users2.map((user)=>{
//     return user;
// })
// console.log(y);

//!scoping
// var a = 10;
// let b = 30;
// function x(){
//     var user = "Shravan";
//     let company = "Amazon";
//     const sal = 1234567890;
//     console.log(user)
//     console.log(company)
//     console.log(sal)
// }
// x();


//~ FEC and GEC
// function x(){
//     var a = 10;
//     let b = 20;
//     console.log(a,b)
//     function y(){
//         let p ="Js"
//         let q = "React"
//         console.log(p,q)
//         function z(){
//             const username = "Harish";
//             console.log(username)
//             console.log(a)
//             console.log(b)
//         }
//         z();
//     }
//     y();
// }
// x();




