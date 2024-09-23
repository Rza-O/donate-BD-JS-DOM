// Making Noakhali Donation money finctional
const donateBtnNoakhali = document.getElementById('btn-donate-noakhali');
donateBtnNoakhali.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount-noakhali');
    validateAmount(donateAmount);
    const myAmount = getTextFieldValue('my-amount');
    const noakhaliSum = getTextFieldValue('noakhali-sum') + donateAmount;
    const remainingBalance = myAmount - donateAmount; 
    document.getElementById('noakhali-sum').innerText = noakhaliSum;
    document.getElementById('my-amount').innerText = remainingBalance;
    return;
});


// Making Feni Donation Money Functional
const donateBtnFeni = document.getElementById('btn-donate-feni');
donateBtnFeni.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount-feni');
    validateAmount(donateAmount);
    const myAmount = getTextFieldValue('my-amount');
    const feniSum = getTextFieldValue('feni-sum') + donateAmount;
    const remainingBalance = myAmount -donateAmount;
    document.getElementById('feni-sum').innerText = feniSum;
    document.getElementById('my-amount').innerText = remainingBalance;
    return
});