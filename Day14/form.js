let password = document.getElementById("uPass");
let check = document.getElementById("check")
let show = document.getElementById("show")

check.addEventListener("click",event=>{
    if(event.target.checked==true){
        password.setAttribute("type","text");
        show.innerText("type")
    }else{
        password.setAttribute("type","password");
        show.innerText="show password";
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = username.password;
    
}) 