// Making Noakhali Donation money finctional
const donateBtnNoakhali = document.getElementById('btn-donate-noakhali');
donateBtnNoakhali.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount-noakhali');
    const myAmount = getTextFieldValue('my-amount');
    validateAmount(donateAmount, myAmount);
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
    const myAmount = getTextFieldValue('my-amount');
    validateAmount(donateAmount, myAmount);
    const feniSum = getTextFieldValue('feni-sum') + donateAmount;
    const remainingBalance = myAmount - donateAmount;
    document.getElementById('feni-sum').innerText = feniSum;
    document.getElementById('my-amount').innerText = remainingBalance;
    return;
});


//Making Aid For Injured Functional
const donateBtnAid = document.getElementById('btn-donate-aid');
donateBtnAid.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount-aid');
    const myAmount = getTextFieldValue('my-amount');
    validateAmount(donateAmount, myAmount);
    const aidSum = getTextFieldValue ('aid-sum') + donateAmount;
    const remainingBalance = myAmount - donateAmount;
    document.getElementById('aid-sum').innerText = aidSum;
    document.getElementById('my-amount').innerText = remainingBalance;
    return;
})