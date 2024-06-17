// Object property without shorthand
// const fName = 'Raj'
// const year = 20
// const country = 'India'
// // User without ES6  
// // shorthand property  
// const User = {
//     name: fName,      
//     age: year,
//     location: country
// }
// console.log(User)
// // Object property with shorthand
// const name = 'Raj'
// const age = 20
// const country = 'India'
// // User with ES6 shorthand
// // property  
// const User = {
//     age,
//     name,
// country
// } 
//     console.log(User)  
// const propertyName = "dynamicPropertyName";
// const obj = {
//   [propertyName]: 5
// };
// console.log(obj); 
// / Function to prompt the user for vehicle details and add them to an object
// function addVehicle() {
//     // Prompt the user for all vehicle details in a single input
//     const vehicleDetails = prompt("Enter the vehicle details in the format: Make, Model, Year, Color");
//     // Split the input string into an array
//     const detailsArray = vehicleDetails.split(',');
//     // Create an object to store the vehicle details
//     const vehicle = {
//         make: detailsArray[0].trim(),
//         model: deta
//         // Function to prompt the user for vehicle details and add them to an object
// // Function to prompt the user for vehicle details and add them to an object
// function addVehicle() {
//     // Prompt the user for all vehicle details in a single input
//     const vehicleDetails = prompt("Enter the vehicle details in the format: Make, Model, Year, Color");
//     // Split the input string into an array
//     const [make, model, year, color] = vehicleDetails.split(',').map(detail => detail.trim());
//     // Create an object to store the vehicle details using shorthand property names
// // Create an object to store the vehicle details using shorthand property names
// const vehicle = { make, model, year, color };
// // Log the vehicle details to the console
// console.log("Vehicle Details:", vehicle);
// }
// Function to prompt the user for vehicle details and add them to an object
function addVehicle() {
    // Prompt the user for all vehicle details in a single input
    const vehicleDetails = prompt("Enter the vehicle details in the format: Make, Model, Year, Color");

    // Split the input string into an array
    const [make, model, year, color] = vehicleDetails.split(',').map(detail => detail.trim());

    // Create an object to store the vehicle details using shorthand property names
    const vehicle = { make, model, year, color };

    // Log the vehicle details to the console
    console.log("Vehicle Details:", vehicle);
}
// Call the function to add a vehicle
addVehicle();
