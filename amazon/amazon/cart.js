


let cart_items = document.querySelector("#cart_items")
 


let cartItemsProducts = document.querySelector("#cartItemsProducts")

let cartArray = JSON.parse(localStorage.getItem("cart_items"))||[]
console.log(cartArray)

  let totalPrice = cartArray.reduce((acc,el)=>{
 return acc+el.price
  },0)

      let cart_itemsDiv = document.createElement("div")
         cart_itemsDiv.className = 'cart_itemsDiv'

         let h2s = document.createElement("h2")
         h2s.innerText = "Total Price: "
         let span= document.createElement("span")
         span.innerText =  totalPrice 

         let h3s = document.createElement("h3")
         h3s.innerText ="Total Items:" 
         let span2 = document.createElement("span")
          span2.innerText = cartArray.length

         h2s.append(span)
         h3s.append(span2)


         cart_itemsDiv.append(h2s,h3s)
           cartItemsProducts.append(cart_itemsDiv)
        

  console.log(totalPrice)
/
  cartArray.forEach((el)=>{
   
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
        rating.innerText =  `Rating: ${el.rating.rate} ⭐ (${el.rating.count} reviews)`;
        

        let price = document.createElement("p")
        price.innerText =  el.price

       
         imageDIv.append(img)
        
         titleDiv.append(title)
        titlePrice.append( titleDiv,price,rating)
        card.append(imageDIv,titlePrice)
        cart_items.append(card)
    })


    