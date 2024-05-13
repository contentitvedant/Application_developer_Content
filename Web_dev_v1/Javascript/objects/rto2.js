const rls = require("readline-sync");

let RTORecords = {
  MH058361: {
    vehicleName: "verna",
    vehicleCompany: "hyundai",
    vehicleColor: "red",
    InsuranceNumber: "4354-9098-8972-0938",
    vehicleOwner: "roger garero",
    vehicleType: "LMV",
    Fine: {
      NO_HELMET: 500,
      OVERSPEEDING: 1000,
      TRAFFIC_VIOLATION: 750,
      DRIVING_WITHOUT_LICENSE: 1500,
      ILLEGAL_PARKING: 600,
      DRUNK_DRIVING: 2000,
    },
  },
  // Add more preexisting data here if needed
};

function enterNewVehicle(){
 console.log("Enter details of the new vehicle");
 const numberPlate= rls.question("Number plate :- ");
 if(RTORecords.hasOwnProperty(numberPlate))
{
    console.log("the vehicle already exist")
    return;
}

// taking all the inputs one by one 
const vehicleName = readlineSync.question("Vehicle Name: ");
const vehicleCompany = readlineSync.question("Vehicle Company: ");
const vehicleColor = readlineSync.question("Vehicle Color: ");
const insuranceNumber = readlineSync.question("Insurance Number: ");
const vehicleOwner = readlineSync.question("Vehicle Owner: ");
const vehicleType = readlineSync.question("Vehicle Type: ");

const fine = {};
//it will keep taking input until the user enters done 
console.log("Enter fine details for the vehicle (Enter 'done' to finish):");
  while (true) {
    const violation = readlineSync.question("Violation: ");
    if (violation === "done") break;
    const fineAmount = readlineSync.question("Fine Amount: ");
    fine[violation] = fineAmount;
  }
//now we will use shorthand property here to put the properties inside the object
RTORecords[numberPlate] = {
  vehicleName,
  vehicleCompany,
  vehicleColor,
  InsuranceNumber: insuranceNumber,
  vehicleOwner,
  vehicleType,
  Fine: fine,
  details: function () {
    console.log(
      `This is a ${vehicleColor} ${vehicleCompany} ${vehicleName}.`
    );
  },
};
console.log("the new number plate has been added with there Fines")
}