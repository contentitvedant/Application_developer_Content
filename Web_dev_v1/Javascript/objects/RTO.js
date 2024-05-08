// What is an object? What is the need? How to create objects ? syntax? Different ways of creating objects ?
// What are the properties of an object ? nested object?

// Shorthand properties ? 
// Computed properties? Defining and accessing functions as properties ?
// CRUD using Objects 
// Access properties using     ‘. ‘  and  ‘ [ ] ‘ and its difference
// for of and for in
// this keyword
// Methods of objects -key() ,values(),entries(), assign(),create()
// Object destructuring and this keyword 

// var rls=require('readline-sync');
// //simple object with nested objects
// let RTORecords = { 
//     MH058361 : {
//         vehicleName: "verna",
//         vehicleCompany:"hyundai",
//         vehicleColor: "red",
//         InsuranceNumber: "4354-9098-8972-0938",
//         vehicleOwner: "roger garero",
//         vehicleType: "LMV",
//         yearOfPurchase:2001,
//         Fine: {
//             NO_HELMET: 500,
//             OVERSPEEDING: 1000,
//             TRAFFIC_VIOLATION: 750,
//             DRIVING_WITHOUT_LICENSE: 1500,
//             ILLEGAL_PARKING: 600,
//             DRUNK_DRIVING: 2000
//         },
//     //     details : function(){
//     // console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//     //     }
//     },
//     MH036985 : {
//         vehicleName: "Honda City",
//         vehicleCompany:"honda",

//         vehicleColor: "silver",
//         InsuranceNumber: "1234-5678-9012-3456",
//         vehicleOwner: "Michael Smith",
//         vehicleType: "LMV",
//         Fine: {
//             NO_PARKING: 500,
//             DRIVING_WITH_EXPIRED_LICENSE: 1000,
//             SPEEDING_IN_SCHOOL_ZONE: 800,
//             WRONG_WAY_DRIVING: 1500,
//             DRIVING_WITH_DEFECTIVE_LIGHTS: 400,
//             THROWING_TRASH_FROM_VEHICLE: 300
//         },
//         details : function(){
//             console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//                 }
//     },
    
//     MH092347 : {
//         vehicleName: " Corolla",
//         vehicleCompany:"toyota",
//         vehicleColor: "black",
//         InsuranceNumber: "9876-5432-1098-7654",
//         vehicleOwner: "Sophia Rodriguez",
//         vehicleType: "LMV",
//         Fine: {
//             DOUBLE_PARKING: 700,
//             RECKLESS_DRIVING: 2000,
//             FAILING_TO_YIELD: 900,
//             DRIVING_WITHOUT_INSURANCE: 2500,
//             LITTERING_ON_ROADWAY: 350,
//             USING_HIGH_BEAM_IN_CITY: 600
//         },  details : function(){
//             console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//                 }
//     },
    
//     MH015762 : {
//         vehicleName: "Alto",
//         vehicleCompany:"Suzuki",
//         vehicleColor: "white",
//         InsuranceNumber: "5678-9012-3456-7890",
//         vehicleOwner: "David Anderson",
//         vehicleType: "LMV",
//         Fine: {
//             DRIVING_WITHOUT_SEATBELT: 400,
//             FAILURE_TO_SIGNAL: 600,
//             EXPIRED_VEHICLE_REGISTRATION: 1200,
//             UNAUTHORIZED_MODIFICATION: 1500,
//             BLOCKING_INTERSECTION: 1000,
//             OVERTAKING_FROM_THE_WRONG_SIDE: 700
//         }, 
//         details : function(){
//             console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//                 }
//     },
    
//     MH056321 : {
//         vehicleName: "Ford EcoSport",
//         vehicleCompany:"Ford",
//         vehicleColor: "gray",
//         InsuranceNumber: "3456-7890-1234-5678",
//         vehicleOwner: "Emma Taylor",
//         vehicleType: "LMV",
//         Fine: {
//             SPEEDING_IN_CONSTRUCTION_ZONE: 900,
//             IMPROPER_LANE_CHANGING: 800,
//             FAILURE_TO_STOP_AT_STOP_SIGN: 1000,
//             DRIVING_WITHOUT_REAR_VIEW_MIRROR: 300,
//             FAILURE_TO_YIELD_TO_PEDESTRIAN: 1100,
//             SOUND_POLLUTION_FROM_VEHICLE: 600
//         },
//         details : function(){
//             console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//                 }
//     }
//     ,
//     MH035246 : {
//         vehicleName: "i20",
//         vehicleCompany:"Hyundai",
//         vehicleColor: "red",
//         InsuranceNumber: "9012-3456-7890-1234",
//         vehicleOwner: "Olivia Brown",
//         vehicleType: "LMV",
//         Fine: {
//             EXCEEDING_NOISE_LIMIT: 700,
//             DRIVING_WITH_BROKEN_HEADLIGHT: 400,
//             FAILURE_TO_GIVE_WAY_TO_EMERGENCY_VEHICLE: 1500,
//             FAILING_TO_OBEY_TRAFFIC_SIGNAL: 1200,
//             DRIVING_ON_THE_WRONG_SIDE_OF_THE_ROAD: 800,
//             FAILING_TO_SIGNAL_WHEN_TURNING: 500
//         },
//         details : function(){
//             console.log(`the car is of ${this.vehicleType}  and the manufactoring company is  ${this.vehicleCompany} `)
//                 }
//     }
// }





 
const readlineSync = require('readline-sync');

function addNewVehicle(RTORecords) {
    console.log("Enter details of the new vehicle:");
// taking input for number plate as a key 

    const numberPlate = readlineSync.question("Number Plate: ");

    // Check if the number plate already exists in the predefined objects
    if (RTORecords.hasOwnProperty(numberPlate)) {
        console.log("Vehicle with this number plate already exists. Please choose a different number plate.");
        return RTORecords; // Return the unmodified records object
    }

   //taking single inputs from the users 
    const vehicleName = readlineSync.question("Vehicle Name: ");
    const vehicleCompany = readlineSync.question("Vehicle Company: ");
    const vehicleColor = readlineSync.question("Vehicle Color: ");
    const insuranceNumber = readlineSync.question("Insurance Number: ");
    const vehicleOwner = readlineSync.question("Vehicle Owner: ");
    const vehicleType = readlineSync.question("Vehicle Type: ");
    
    // creating a empty fine object which will act as a nested objects
    const fine = {};

    console.log("Enter fine details for the vehicle (Enter 'done' to finish):");
    while (true) {
        const violation = readlineSync.question("Violation: ");
        if (violation === 'done') break;
        const fineAmount = parseInt(readlineSync.question("Fine Amount: "));
        fine[violation] = fineAmount;
    }

    RTORecords[numberPlate] = {
        vehicleName,
        vehicleCompany,
        vehicleColor,
        InsuranceNumber: insuranceNumber,
        vehicleOwner,
        vehicleType,
        Fine: fine,
        details: function() {
            console.log(`This is a ${vehicleColor} ${vehicleCompany} ${vehicleName}.`);
        }
    };

    console.log(`Vehicle with number plate ${numberPlate} added successfully!`);
    return RTORecords;
}
// Example usage:
let RTORecords = {}; // Assuming RTORecords is initially an empty object
RTORecords = addNewVehicle(RTORecords);
console.log(RTORecords); // Print the updated records object
























