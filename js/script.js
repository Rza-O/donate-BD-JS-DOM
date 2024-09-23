// Declaring global variable
// const myAmount = getTextFieldValue('my-amount');
// Getting donate amount
const donateBtn = document.getElementById('btn-donate');
donateBtn.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount');
    if(donateAmount > 0 && !isNaN(donateAmount)){
        console.log('good');
    }
    else{
        alert("Invalid Input! Please try again!", location.reload());
    }
});