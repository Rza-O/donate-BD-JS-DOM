// Shared function to get the value by id and make it float
function getInputFieldById(id){
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    return inputNumber;
} 

// Shared function to get text field value
function getTextFieldValue (id){
    const textNumber = parseFloat(document.getElementById(id).innerText);
    return textNumber;
}


// Shared Function for validation
function validateAmount(input){
    
}