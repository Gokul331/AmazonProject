let product;
let productList ='';
let valEl=1; 
products.forEach(product => {
    let html = `
    <div class="product">
            <img src="${product.image}" class="product-img" alt="">
            <div class="product-name">${product.name}</div>
            <div class="product-quantity">
            <div class="qty-label">Quantity</div>
               <input type="number" class="qty" value="${valEl}" min="0">
            </div>
            <div class="price">$${(product.priceCents/100).toFixed(2)}</div>
            <div class="rating">
               <img src="./asset/ratings/rating-${product.rating.stars*10}.png" alt="" class="rating-star">
               <div class="rating-count">${product.rating.count}</div>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            <button class="buy-now">Buy Now</button>
    </div>`
   
    productList +=html;
    
});
    document.querySelector('.product-container').innerHTML=productList;

    
      