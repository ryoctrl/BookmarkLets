javascript:
    let buyPrice = false;
let pause = false;
let sfdPrice = document.getElementById('sfd_price');
let priceInput = document.getElementsByClassName('place__price');
setInterval(() => {
    if (pause) return;
    if (buyPrice) priceInput[0].value = sfdPrice.getAttribute('data-sfdPrice') - 1;
    else priceInput[0].value = sfdPrice.getAttribute('data-sfdPrice');
}, 100);
let keyDown = () => {
    if (event.keyCode == 66) {
        //"B"
        buyPrice = true;

    } else if (event.keyCode == 83) {
        //"S"
        buyPrice = false;

    } else if (event.keyCode == 80) {
        //"P"
        pause = !pause;
    }
};
document.onkeydown = keyDown;