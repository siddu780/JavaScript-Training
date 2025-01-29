// task:-
// take an array of objects where each object contains an employee id,emp name,emp company,emp salary,emp address, where emp address is again an object which contains emp city,emp area.
// print all those values on the UI in a form of table.



let arr = [
    {
        empId:1,
        empName:'siddhu1',
        empCompany:'amazon',
        empSalary:'50,000',
        empAddress:{
            city:'hyderabad',
            state:'telangana'
        }
    },
    {
        empId:2,
        empName:'mary',
        empCompany:'amazon',
        empSalary:'60,000',
        empAddress:{
            city:'hyderabad',
            state:'telangana'
        }
    },
    {
        empId:3,
        empName:'siddhu2',
        empCompany:'amazon',
        empSalary:'70,000',
        empAddress:{
            city:'hyderabad',
            state:'telangana'
        }
    },
    {
        empId:4,
        empName:'mary2',
        empCompany:'amazon',
        empSalary:'80,000',
        empAddress:'moinabad2',
        empAddress:{
            city:'hyderabad',
            state:'telangana'
        }
    }
]
arr.map((emp)=>{
    let table = document.getElementById("body");
    table.innerHTML+=`
        <tr><td>${emp.empId}</td><td>${emp.empName}</td><td>${emp.empCompany}</td><td>${emp.empSalary}</td><td>${emp.empAddress.city}</td></tr>
    `
})
