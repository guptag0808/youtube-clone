

  function sliderShow(){

    const arr = ["https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Sports/June/IYD/GW/Hero/Unrec/PC-Banner-1._CB790685457_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
    ]

    // document.querySelector(".w3_display_container")

    let img = document.querySelector("img")

       img.src = arr[0]

       let i = 0
       setInterval(function(){
        if(i==arr.length){
            i=0
        }
        img.src = arr[i]
        i++
       },5000)
  }

  sliderShow()


  const container = document.querySelector("#container")

  let cartArray = JSON.parse (localStorage.getItem("cart_items"))|| []

 let URL ="https://fakestoreapi.com/products"

 


  async function fetchData(){
    let response = await fetch(URL)

   let data = await response.json()
//    console.log(data)
     showPosts(data)
  
  }

  fetchData()

  function showPosts(data){

    data.forEach((el)=>{
   
        let card = document.createElement("div")
        card.className = "card"

      let imageDIv = document.createElement("div")
        imageDIv.className = "imageDiv"
        let img = document.createElement("img")
        img.src = el.image

        let titlePrice = document.createElement("div")
           titlePrice.className = "titlePrice"

           let titleDiv = document.createElement("div")
           titleDiv.className = "titleDiv"
        let title = document.createElement("h2")
        
            title.innerText = el.title
         
        let rating = document.createElement("p")
        rating.className =" rating_box"
        rating.innerText =  `Rating: ${el.rating.rate} ⭐ (${el.rating.count} reviews)`;
        

        let price = document.createElement("p")
        price.innerText = "₹:" + el.price

         let div2 = document.createElement("div")
         div2.className = "btns"

        //   let button = document.createElement("button")
        // button.className="addtoCart"
        // button.innerText  = "Add to Cart"

         let anchor = document.createElement("a")
         anchor.href = "cart.html"
         anchor.className = "addToCart"
         anchor.innerText = "Add to Cart"


       anchor.addEventListener("click",function(){

         addToCart(el)
       })

        
         imageDIv.append(img)
        //  div3.append(btn,btn2)
        
       
         div2.append(anchor)
         titleDiv.append(title)
        titlePrice.append( titleDiv,price,rating)
        card.append(imageDIv,titlePrice,div2)
        container.append(card)
    })


        function addToCart(el){
           
            console.log(el)
            cartArray.push(el)
            localStorage.setItem("cart_items",JSON.stringify(cartArray))
        }
  }