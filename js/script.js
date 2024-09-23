// Making Noakhali Donation money finctional
const donateBtnNoakhali = document.getElementById('btn-donate-noakhali');
donateBtnNoakhali.addEventListener('click', function(){
    const myAmount = getTextFieldValue('my-amount');
    const donateAmount = getInputFieldById('donate-amount');
    if(donateAmount > 0 && !isNaN(donateAmount)){
        const noakhaliSum = getTextFieldValue('noakhali-sum') + donateAmount;
        const remainingBalance = myAmount - donateAmount; 
        document.getElementById('noakhali-sum').innerText = noakhaliSum;
        console.log(noakhaliSum);
        document.getElementById('my-amount').innerText = remainingBalance;
        console.log(remainingBalance);
        return;
    }
    else{
        alert("Invalid Input! Please try again!", location.reload());
    }
});


// Making Feni Donation Money Functional
Cons