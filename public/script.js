fetch("/.netlify/functions/index")
.then(res=>res.json())
.then(data=>{

document.getElementById("name").textContent=data.name
document.getElementById("job").textContent=data.job
document.getElementById("age").textContent=data.age
document.getElementById("location").textContent=data.location
document.getElementById("phone").textContent=data.phone
document.getElementById("email").textContent=data.email

})