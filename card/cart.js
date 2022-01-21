
            // var kidscart=JSON.parse(localStorage.getItem("kidsproductbag"))||[];
            // console.log(kidscart);
            var databag=JSON.parse(localStorage.getItem("womenproductbag"))||[];
            var womencart=JSON.parse(localStorage.getItem("imageinfo"))||[];
            var tabledata=JSON.parse(localStorage.getItem("tabledatabase"))||[];
            var dat=JSON.parse(localStorage.getItem("updatedata"))||[];
            // console.log(womencart); 
            
            womencart.map(function(data,index){
            var tr=document.createElement("tr");
            var td1=document.createElement("img");
            td1.setAttribute("id","photo");
            td1.setAttribute("src",data.img_URl);
            var td2=document.createElement("td");
            td2.textContent=data.brand;
            // td2.textContent=data.price;
            var td3=document.createElement("td");
            td3.textContent=data.price;
            var td4=document.createElement("td");
            td4.textContent=data.name;
            var td5=document.createElement("button");
            td5.textContent="ADD";
            td5.setAttribute("id","cartbtn");
            var td6=document.createElement("td");
            td6.textContent="REMOVE";
            td6.addEventListener("click",deletepro);

            td6.setAttribute("id","btn");
            td5.addEventListener("click",addtocart);
            function addtocart(){
                tabledata.push(data);
                localStorage.setItem("tabledatabase",JSON.stringify(tabledata));
                confirm("This is available in your cart !");
                // window.location.href="maincart.html";
            }
            tr.append(td1,td2,td3,td4,td5,td6)
            document.querySelector("tbody").append(tr);
            // document.querySelector("#img").append(td1);
            });


            function deletepro(index){
            tabledata.splice(index,1);
            localStorage.setItem("updatedata",JSON.stringify(tabledata));
                console.log(tabledata);
            }

            var cartitems2=JSON.parse(localStorage.getItem("kidscart"))||[];
            cartitems2.map(function(data){
            var tr=document.createElement("tr");
            var td1=document.createElement("img");
            td1.setAttribute("id","photo");
            td1.setAttribute("src",data.ima_url);
            var td2=document.createElement("td");
            td2.textContent=data.brand;
            // td2.textContent=data.price;
            var td3=document.createElement("td");
            td3.textContent=data.price;
            var td4=document.createElement("td");
            td4.textContent=data.name;
            var td5=document.createElement("button");
            td5.textContent="ADD";
            td5.setAttribute("id","cartbtn");
            var td6=document.createElement("td");
            td6.textContent="REMOVE";
            td6.addEventListener("click",deletepro);

            td6.setAttribute("id","btn");
            td5.addEventListener("click",addtocart);
            function addtocart(){
                tabledata.push(data);
                localStorage.setItem("tabledatabase",JSON.stringify(tabledata));
                // window.location.href="maincart.html";
                confirm("This is available in your cart !")
            }
            tr.append(td1,td2,td3,td4,td5,td6)
            document.querySelector("tbody").append(tr);
            // document.querySelector("#img").append(td1);
            });



            // findtotalsum
            var total1=womencart.reduce(function(ac,cv){
                return ac+Number(cv.price);
            },0);

            var total2=cartitems2.reduce(function(ac,cv){
                return ac+Number(cv.price);
            },0);

            var Total= Math.floor(total1 + total2);
            document.querySelector("#sum").textContent=`Total Amount: ${Total}`

            // quantity
            var quantity1=womencart.length;
            var quantity2=cartitems2.length;
            var quantity=quantity1+quantity2;
            document.querySelector("#quantity").textContent=`${quantity} item in my Cart`


            // promocode

                var pro1=document.querySelector("#promobtn").addEventListener("click",promo);
                function promo(){
                    var pro2=document.querySelector("#promo").value;
                    if(pro2=="Masai123"){
                        var discount=Math.floor(Total*(1-30/100));
                        alert("you got " + discount + " " +"%");
                        console.log(discount);
                    }

                    // else{
                    //     alert("Please Check Your PromoCode")
                    // }
                    if(pro2=="Masai123"){
                            document.querySelector("h2").textContent=`Total amount is : ${discount}` 
                        }
                        else{
                            document.querySelector("h2").textContent=`Total amount is : ${Total}`
                            alert("No discount !");
                        }
                }
                       document.querySelector("#checkout").addEventListener("click",gotopay);
                       function gotopay(){
                           confirm("This moves to you checkout page");
                            // window.location.href="checkout.html";
                            window.location.pathname="zappos-repository/checkout/checkout.html";
                       }
               