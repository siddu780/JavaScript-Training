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


