// console.log(10)
// console.log(20)
// !setTimeOut
// setTimeout(()=>{
//     console.log(30)
// },5000)
// console.log(40)
// console.log(50)
// !setInterval
// setInterval(()=>{
//     document.write("MRU")
// },1550)
// !promises
// let p1 = new Promise((resolve,reject)=>{})
// console.log(p1)
// let p2 = new Promise((resolve,reject)=>{
//     resolve("Succss")
// })
// console.log(p2)
// let p3 = new Promise((resolve,reject)=>{
//     reject("fail")
// })
// console.log(p3)
//~Execution of promises
// let p2 = new Promise((resolve,reject)=>{
//     reject("rej")
// })
// p2.then((response)=>{
//     console.log(response)
// }) // executes when the promise is resolveds
// p2.catch((error)=>{
//     console.log(error)
// }) // executes when the promise is rejected
// let p3 = new Promise((resolve,reject)=>{
//     resolve("acc")
// })
// //~method chaining
// p3.then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Final block")
// })