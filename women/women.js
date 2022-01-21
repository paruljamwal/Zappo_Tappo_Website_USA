                var databag=JSON.parse(localStorage.getItem("womenproductbag"))||[];
                var imagedetail=JSON.parse(localStorage.getItem("imageinfo"))||[];
                pricesort(databag);
                    pricesort(arrangebrand);



                    // sort by price start here
                    function sortbyprice(){
                        var arrangedata=document.querySelector("#sortprice").value;
                        if(arrangedata==="Low"){
                            databag.sort(function(a,b){
                                console.log(arrangedata);
                                return a.price-b.price;
                                
                            });
                        }
                        else if(arrangedata==="High"){
                            databag.sort(function(a,b){
                                console.log(arrangedata);
                                return b.price-a.price;
                            });
                        }
                    //    console.log(databag);
                    alert("Your are choosing" +" " + arrangedata + " " + " form of Price !");
                    pricesort(databag);
                    }
                    // sort by price ends here
                    

                //  arragnebybrand start hree
                function sortbybrand(){
                var arrangebrand=document.querySelector("#sortbrand").value;
                        var checkbrand=databag.filter(function(elem){
                            return elem.brand===arrangebrand;
                        });
                        console.log(checkbrand);
                        pricesort(checkbrand);
                    }
                // arragnebybrand start hree
                function pricesort(databag){
                document.querySelector(".productbox").innerHTML="";
                databag.map(function(data){
                var bag1=document.createElement("div"); 
                bag1.setAttribute("id","wholebox");
                var bag2=document.createElement("div");
                bag2.setAttribute("id","imgbox");
                var bag3=document.createElement("div");
                bag3.setAttribute("id","txtbox");
                var img=document.createElement("img");
                img.setAttribute("id","image");
                img.setAttribute("src",data.img_URl);
                img.addEventListener("click",gotocart)
                function gotocart(){
                    imagedetail.push(data);
                    console.log(imagedetail);
                    localStorage.setItem("imageinfo",JSON.stringify(imagedetail));
                    //   window.location.href="cart.html";
                    window.location.pathname="../card/cart.html"
                }
                // img.addEventListener("doubleclick",gotocart)
                // function gotocart(){
                //     window.location.href="maincart.html";
                // }
                bag2.append(img);
                var brand=document.createElement("h2");
                brand.textContent=data.brand;
                var name=document.createElement("p");
                name.setAttribute("id","text");
                name.textContent=data.name;
                var price=document.createElement("p");
                price.setAttribute("id","money");
                price.textContent=data.price;
                bag3.append(brand,name,price)



                bag1.append(bag2,bag3);
                document.querySelector(".productbox").append(bag1);

                });
             
                 document.querySelector(".bar2").addEventListener("click",women);
                function women(){
                    window.location.pathname="../women/women.html";
                    
                }
                document.querySelector(".bar1").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }
                document.querySelector(".bar3").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }
                document.querySelector(".bar4").addEventListener("click",kid);
                function kid(){
                    window.location.pathname="../kids/kids.html";
                }
                document.querySelector(".bar5").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }
                document.querySelector(".bar6").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }
                document.querySelector(".bar7").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }
                document.querySelector(".bar8").addEventListener("click",dummy);
                function dummy(){
                    window.location.pathname="../dummy/dummy.html";
                }

               }
   
