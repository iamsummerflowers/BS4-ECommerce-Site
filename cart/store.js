
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready();
}

function ready(){
    var removeCartItemBtn = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemBtn);
    for (var i = 0; i <removeCartItemBtn.length; i++){
        var button = removeCartItemBtn[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("item-amount");
    for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
    }
}

//removing cart item 
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //call update total function
    updateCartTotal();
}

//quantity change check
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}

//update the cart total
function updateCartTotal(){
    var cartContentContainer = document.getElementsByClassName('cart-content')[0];
    var cartItems = cartContentContainer.getElementsByClassName("cart-item");
    var total = 0;
    for (var i = 0; i < cartItems.length; i++){
        var cartItem = cartItems[i];
        var priceElement = cartItem.getElementsByClassName('cart-price')[0];
        var quantityElement = cartItem.getElementsByClassName('item-amount')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total")[0].innerText = total;
}

//tests console.log of updateTotal function
    // var cartContentContainer = document.getElementsByClassName('cart-content')[0];
    // var cartItems = cartContentContainer.getElementsByClassName("cart-item");
    // for (var i = 0; i < cartItems.length; i++){
    // var cartItem = cartItems[i];
    // var priceElement = cartItem.getElementsByClassName("cart-price")[0];
    // var quantityElement = cartItem.getElementsByClassName('item-amount')[0]
    // console.log(priceElement,quantityElement);
    // }