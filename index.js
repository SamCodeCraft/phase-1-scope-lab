// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    
    return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    
    bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope by writing a new function that changes that variable.
function overwriteBestCustomer() {
   
    bestCustomer = 'maybe bob';
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
   
    // This will result in an error because you cannot reassign a value to a constant
    leastFavoriteCustomer = 'someone else';
}
