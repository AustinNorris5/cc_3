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

//Task 3: Employee Performance Tracking Scenario
let employee = {
    name: "Jimmy Butler",
    role: "Sales",
    performanceScore: 70,
    isActive: true
}; //Declare an object employee with properties

employee.performanceScore = 80; //Update the performanceScore property

employee.PromotionEligible = employee.performanceScore >= 95; //Add a new property promotionEligible with a boolean value

console.log("Updated Employee:", employee); //Log the updated employee object to the console

//Task 4: Customer Feedback Records Scenario
let feedback = [
    {customerName: "Tyler Herro", feedbackText: "Great", rating: 9},
    {customerName: "Dwayne Wade", feedbackText: "Good", rating: 6},
    {customerName: "Chris Bosh", feedbackText: "Needs Improvement", rating: 2}
]; //Declare an array feedback containing at least three objects

feedback.push ({customerName: "Gabe Vincent", feedbackText: "Perfect", rating: 10}) //Add a new feedback object to the array

console.log("Customer Feedback:", feedback); //Log the entire feedback list to the console

//Task 5:  Inventory Management System Scenario
const inventory = {
    itemName: "Shoes",
    stockCount: 30,
    price: 150, //Declare an object inventory with properties
    calculateTotalValue: function () {
        return this.stockCount * this.price
    } //Add a method calculateTotalValue that returns the total value
};

console.log("Inventory Details:");
console.log(`Item Name: ${inventory.itemName}`);
console.log(`Stock Count: ${inventory.stockCount}`);
console.log(`Price: $${inventory.price}`);
console.log(`Total Inventory Value: $${inventory.calculateTotalValue()}`); //Log the inventory details and total value to the console



