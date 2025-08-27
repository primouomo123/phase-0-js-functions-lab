//Calculate tax function
function calculateTax(amount) {
    let taxValue;
    return taxValue = amount * 0.1;
}

//Convert to uppercase function
function convertToUpperCase(text) {
    let upperCaseText;
    return upperCaseText = text.toUpperCase();
}

//Find maximus function
function findMaximum(num1, num2) {
    let maximum;
    return maximum = num1 > num2 ? num1 : num2;
}

//Check if a string is a palindrome
function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    if (reversedWord === word) {
        return true;
    }
    else {
        return false;
    }
}

    //Calculate discounted price function
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountedPrice;
    return discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };