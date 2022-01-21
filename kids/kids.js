                var kidsdata=JSON.parse(localStorage.getItem("kidsproductbag"))||[];
                //  console.log(kidsdata);
                var cart=JSON.parse(localStorage.getItem("kidscart"))||[];
                sortprice(kidsdata);
                sortprice(search);
                //  sortbyprice start here
                function sortbyprice(){
                var pricesort=document.querySelector("#sortprice").value;
                if(pricesort==="Low"){
                kidsdata.sort(function(a,b){
                return a.price-b.price; 
                });
                }
                else if(pricesort==="High"){
                    kidsdata.sort(function(a,b){
                        return b.price-a.price;
                });
                }
                    //    console.log(kidsdata);
                sortprice(kidsdata);
                alert("Your are choosing"+" " + pricesort +" "+ "form of price !");
                }
                // sortbyprice ends here


                // reaarangebybrands start here
                function sortbybrand(){
                var search=document.querySelector("#sortbrand").value;
                var brandsearch= kidsdata.filter(function(elem){
                    return elem.brand===search;
                });
                sortprice(brandsearch);


                }
                // reaarangebybrands ends here
                function sortprice(kidsdata){
                document.querySelector(".productbox").innerHTML="";
                kidsdata.map(function(data){
                // console.log(kidsdata)
                var bag1=document.createElement("div");
                bag1.setAttribute("id","wholebox")
                var bag2=document.createElement("div");
                var bag3=document.createElement("div");
                var img=document.createElement("img");
                img.setAttribute("src",data.ima_url);
                img.setAttribute("id","img");
                img.addEventListener("click",gotocart);
                function gotocart(){
                cart.push(data);
                localStorage.setItem("kidscart",JSON.stringify(cart));
                alert("You Added This Item to cart !");
                // window.location.href="cart.html";
                window.location.pathname="../card/cart.html";
                }
                bag2.append(img);
                var brand=document.createElement("p");
                brand.textContent=data.brand;
                // brand.setAttributeNS("id","brand");
                var name=document.createElement("h2");
                name.textContent=data.name;
                // name.setAttribute("id","name");
                var price=document.createElement("p");
                price.textContent=data.price;
                // price.setAttribute("id","price");
                // bag2.setAttribute("id","imgbox");
                // bag3.setAttribute("id","txtbox");
                bag3.append(brand,name,price);
                bag1.append(bag2,bag3);
                document.querySelector(".productbox").append(bag1);
                });

                }

