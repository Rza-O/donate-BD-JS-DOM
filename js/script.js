// Getting donate amount
const donateBtn = document.getElementById('btn-donate');
donateBtn.addEventListener('click', function(){
    const donateAmount = document.getElementById('donate-amount').value;
    console.log(donateAmount);
});