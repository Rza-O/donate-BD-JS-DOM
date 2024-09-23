// Declaring global variable
const myAmount = getTextFieldValue('my-amount');
// Getting donate amount
const donateBtn = document.getElementById('btn-donate');
donateBtn.addEventListener('click', function(){
    const donateAmount = getInputFieldById('donate-amount');
    if(donateAmount > 0 || !isNaN(donateAmount)){
        // const noakhaliSumNumber = getTextFieldValue("noakhali-sum");
        const remainingAmount = myAmount - donateAmount;
        // document.getElementById('my-amount').innerText = remainingAmount;
        console.log(remainingAmount);
        
    }
    else{
        const modalHide = document.getElementById('modal-6');
        modalHide.classList.add('hidden');
        alert("Invalid Input! Please try again!", location.reload());
    }
});