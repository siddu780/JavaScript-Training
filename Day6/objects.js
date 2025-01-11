
// let userDetails = {
//     name:"Shravan",
//     age:19,
//     city:"Hyderabad",
//     address:{
//         area:"Ramaram"
//     }
// }

// console.log(userDetails)
// console.log(userDetails.name)
// console.log(userDetails.address.area)

//~Array of objects
// let user1 = {
//     name:"mary",
//     age:19
// }
// let user2 = {
//     name:"mary2",
//     age:19
// }
// let user3 = {
//     name:"mary3",
//     age:19
// }
// let user4 = {
//     name:"mary4",
//     age:19
// }
// let user5r = {
//     name:"mary5",
//     age:19
// }

let users = [
    {
        name:"name1",
        city:"USA"
    },
    {
        name:"name2",
        city:"USA"
    },
    {
        name:"name3",
        city:"USA"
    },
    {
        name:"name4",
        city:"USA"
    },
]

users.map((el)=>{
    console.log(el.name)
})
