function quantityChange(id, isIncrement) {
    const quantityInput = document.getElementById(id);
    let quantityValue = parseInt(quantityInput.value);
    if (isIncrement) {
        quantityValue++;
        quantityInput.value = quantityValue;
    }
    else {
        if (quantityValue > 0) {
            quantityValue--;
            quantityInput.value = quantityValue;
        }
    }
    if (id == 'phone-quantity') {
        document.getElementById('phone-price').innerText = 1219 * quantityValue;
    }
    else {
        document.getElementById('case-price').innerText = 59 * quantityValue;
    }
    // calculate sub total
    const phoneTotal = document.getElementById('phone-price').innerText;
    const caseTotal = document.getElementById('case-price').innerText;
    const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
    document.getElementById('sub-total').innerText = subTotal;
    // calculate tax
    const taxTotal = subTotal * 0.1;
    document.getElementById('tax').innerText = taxTotal.toFixed(1);
    // calculate total 
    const total = subTotal + taxTotal;
    document.getElementById('total').innerText = total;
}
// event handler on phone plus 
document.getElementById("phone-plus").addEventListener('click', function () {
    quantityChange('phone-quantity', true);
});
// event handler on case plus 
document.getElementById("case-plus").addEventListener('click', function () {
    quantityChange('case-quantity', true);

});
// event handler on phone minus
document.getElementById("phone-minus").addEventListener('click', function () {
    quantityChange('phone-quantity', false);
});
// event handler on case minus 
document.getElementById("case-minus").addEventListener('click', function () {
    quantityChange('case-quantity', false);
});
