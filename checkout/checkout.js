document.querySelector("#checkout").addEventListener("submit",gotopay);
function gotopay(event){
    event.preventDefault()
    window.location.pathname="zappos-repository/payment/payment.html";
    confirm("Do You Want to go payment page !");
}
document.querySelector("#btn3").addEventListener("click",gotootp)
function gotootp(){
    confirm("Do you want to proceed your process !");
    // window.location.href="payment.html";
    window.location.pathname="zappos-repository/payment/payment.html";
}
document.querySelector("#goto").addEventListener("click",gotosign);
function gotosign(){
    // window.location.href="signin.html";
    window.location.pathname="zappos-repository/signin/signin.html";
}
document.querySelector("#btn2").addEventListener("click",gotootp)
function gotootp(){
    confirm("Do you want to proceed your process !");
    // window.location.href="payment.html";
    window.location.pathname="zappos-repository/payment/payment.html";
}