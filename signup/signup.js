
    document.querySelector("#box").addEventListener("submit",filldata);
    var detailsbag=JSON.parse(localStorage.getItem("crediantials"))||[];
    function filldata(event){
        event.preventDefault();
        var name=document.querySelector("#name").value;
        var email=document.querySelector("#email").value;
        var password=document.querySelector("#pass").value;
         
        var obj={
            name:name,
            email:email,
            password:password,
        }
        detailsbag.push(obj);
        console.log(detailsbag);
        localStorage.setItem("crediantials",JSON.stringify(detailsbag));
        // window.location.href="landing.html";
        window.location.pathname="../signin/mainsign.html";
        alert("Account created succesfully !!");
    }
