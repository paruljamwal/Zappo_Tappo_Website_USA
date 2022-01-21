                document.querySelector("#accountcreater").addEventListener("click",createacc);
                function createacc(){
                //  window.location.href="signin.html";
                window.location.pathname="zappos-repository/signin/signin.html";

                }
                document.querySelector("#data").addEventListener("submit",identifydetails);
                var userdata =JSON.parse(localStorage.getItem("crediantials"))||[];
                console.log(userdata);
                function identifydetails(event){
                    event.preventDefault();
                    var email=document.querySelector("#email2").value;
                    var password=document.querySelector("#password").value;
                    var flag=false;
                    for(var i=0 ; i<userdata.length ; i++){
                        if(userdata[i].email===email && userdata[i].password===password){
                            flag=true;

                        }
                
                
                
                }
                if(flag===true){
                    // window.location.href="landing.html";
                    window.location.pathname="zappos-repository/landing/landing.html";
                    alert("Login Successfully !!");
                }
                else{
                    alert("Please Checck your Details");
                }
                }