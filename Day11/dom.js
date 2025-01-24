//! document.getElementByID()

// let element = document.getElementById("demo")
// element.innerText = "DOM";
// console.log(element)

// let div = document.getElementById("test");
// // div.innerText="<h1>Header</h1>"
// div.innerHTML="<h1>Header</h1>"
// console.log(div)

// let ele = document.getElementsByClassName("test");
// console.log(ele)
// console.log(Array.isArray(ele))
// ele[0].style.backgroudColor="yellow"
//!spread operator:- it is used to takeout each value from the original array and add it in  new array(pure array)
//!syntax:-[...variable]
// let x  = [...ele]
// console.log(Array.isArray(x))
// x.map((ele)=>{
//     ele.style.backgroudColor="blue"
// })
    
//!querySelector
//!querySelectorAll
    
// let ele = document.querySelector("#demo")
// console.log(ele)
// let ele2 = document.querySelector(".test")
// console.log(ele2)


// let ele = document.querySelectorAll(".test");
// console.log(ele)
// [...ele].map(ele=>{
//     console.log(ele.innerText)
// })\

//!events

// let btn = document.getElementById("btn")
// syntax:- button.addEventListener("events",callback function)
// btn.addEventListener("click",()=>{
    //     console.log("hi")
    // })
// btn.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor="teal"
// })
// btn.addEventListener("mouseleave",()=>{
//     alert("mouse leave")
// })
// btn.addEventListener("mouseenter",()=>{
//     alert("mouse enter")
// })
// btn.addEventListener("mouseover",()=>{
//     alert("mouse over")
// })
// let btn2 = document.getElementById("btn2")

// btn2.addEventListener("keydown",()=>{
//     alert("key down ")
// })
// btn2.addEventListener("keyup",()=>{
//     alert("key down ")
// })

