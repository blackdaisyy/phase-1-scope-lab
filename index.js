// Write your solution in this file!
// 1. Declare customerName in global scope using var
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// 3. Function that declares bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // Notice: no 'var/let/const', so it becomes global
  return bestCustomer;
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

// 5. Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'jane';

// 6. Function that attempts to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // This will throw an error: "Assignment to constant variable."
  leastFavoriteCustomer = 'someone else';
}
