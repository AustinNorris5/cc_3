//Task 1: Product Price Management Scenario
let prices = [9.99, 19.99, 24.99, 4.99, 49.99]; //Declare and initialize the array with five numerical values

prices.push(18.25); //Add a new price to the array

prices.shift(); //Remove the first price from the array

console.log(prices); //Log the updated price list to the console

//Task 2: Modifying Customer Orders Scenario
let orders = [10, 20, 30, 40, 50]; //Declare an array with five numerical values

orders[2] += 5; //Increase the third order quantity by 5

let totalOrders = orders.reduce((sum, quantity) => sum+ quantity, 0); //Calculate the total number of all orders

console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders); //Log the updated array and total order count to the console