javascript:
    let priceInputer = document.getElementsByClassName('baw-focus-input-order-form-bot-shadow-sell')[0];
let nowPrice = document.getElementsByClassName('now-price')[0];
setInterval(function() {
    priceInputer.value = nowPrice.children[0].children[1].textContent;
}, 500);