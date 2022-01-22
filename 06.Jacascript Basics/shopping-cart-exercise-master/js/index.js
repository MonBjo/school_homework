let cartProducts = '';
let products = document.getElementsByTagName('button');





document.getElementById('open-cart').addEventListener('click', function() {
    listProductsInCart();
});




function listProductsInCart() {
    document.getElementById('cart').classList.toggle('hide');
    
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
    
    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';
    }
}


let shoppingCart = [];
function updateCart() {
    document.getElementById('products').innerHTML = cartProducts;
    listProductsInCart();
}

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(event) {
        updateCart();
        let product = event.target.parentNode.getAttribute('data-product');
        shoppingCart.push(product);
    });
}


/*
*/