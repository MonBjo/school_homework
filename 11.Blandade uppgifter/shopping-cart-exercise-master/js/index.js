let products = document.getElementsByTagName('button');
let shoppingCart = [];
console.log(products);

function updateCart() {
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
}

function listProductsInCart() {
    let cartProducts = '';

    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += `<li><span class="product-title">Titel: </span> ${shoppingCart[i]} </li>`;
    }

    document.getElementById('products').innerHTML = cartProducts;
}

for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
    products[i].addEventListener('click', (event) => {
        console.log('Du klickade på en knapp', event);
        let product = event.target.parentNode.getAttribute('data-product');
        console.log('Du har valt ', product);
        shoppingCart.push(product);
        console.log(shoppingCart);
        updateCart();
        listProductsInCart();
    });
}

document.getElementById('open-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('hide');
    listProductsInCart();
});