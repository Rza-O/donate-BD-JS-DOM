// Shared function to get the value by id and make it float
function getInputFieldById(id){
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    return parseFloat(inputNumber.toFixed(2));
} 

// Shared function to get text field value
function getTextFieldValue (id){
    const textNumber = parseFloat(document.getElementById(id).innerText);
    return parseFloat(textNumber.toFixed(2));
}


// Shared Function for validation
function validateAmount(num, num2){
    if(num2 >=num < 1 || isNaN(num)){
        return alert('Invalid Input! Please try again!', location.reload())
    }
}