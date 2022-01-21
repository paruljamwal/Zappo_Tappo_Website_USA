document.querySelector("#submit").addEventListener("click",enterotp)
function enterotp(){
var value=document.querySelector("#enterotp").value;
if(value=="1234"){
    alert("Payment Successfull !");
    console.log(value);
    // window.location.href="success.html";
    window.location.pathname="zappos-repository/success/success.html";

}

else{
    alert("Please Check Your OTP");
}
 console.log(otp);         
}