username=document.querySelector(".in1");
password=document.querySelector(".in2");
Botton=document.querySelector(".button");
Botton.addEventListener("click",function(){
Maryam=username.value;
Rory=password.value;
if(Maryam=="Maryam"&&Rory=="Rory")
{
    window.location.href="Rory's_Birthday.html"
} else {
    alert("The username or the password are incorrect, Romy")
}
})