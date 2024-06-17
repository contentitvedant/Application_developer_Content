const readlineSync = require("readline-sync")

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
  
};



  
// concept applied computed properties
//  and short hand properties 
function addNewVehicle() {
  console.log("Enter details of the new vehicle:");
  const numberPlate = readlineSync.question("Number Plate: ");
  if (RTORecords.hasOwnProperty(numberPlate)) {
    console.log(
      "vehicle already exist ! "
    );
    return; // Return without modifying records object
  }
  const vehicleName = readlineSync.question("Vehicle Name: ");
  const vehicleCompany = readlineSync.question("Vehicle Company: ");
  const vehicleColor = readlineSync.question("Vehicle Color: ");
  const insuranceNumber = readlineSync.question("Insurance Number: ");
  const vehicleOwner = readlineSync.question("Vehicle Owner: ");
  const vehicleType = readlineSync.question("Vehicle Type: ");

  const fine = {};
  console.log("Enter fine details for the vehicle (Enter 'done' to finish):");
  while (true) {
    const violation = readlineSync.question("Violation: ");
    if (violation === "done") break;
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
    details: function () {
      console.log(
        `This is a ${vehicleColor} ${vehicleCompany} ${vehicleName}.`
      );
    },
  };

  console.log(`Vehicle with number plate ${numberPlate} added successfully!`);

  
}


function checkDetailsByNumberPlate() {
  const numberPlate = readlineSync.question(
    "Enter the number plate to check details: "
  );
  if (RTORecords.hasOwnProperty(numberPlate)) {
    console.log(
      "Details for the vehicle with number plate " + numberPlate + ":"
    );
    console.log(RTORecords[numberPlate]);
  } else {
    console.log("Vehicle with this number plate does not exist in records.");
  }
}

function updateDetailsByNumberPlate() {
  const numberPlate = readlineSync.question(
    "Enter the number plate to update details: "
  );

  if (RTORecords.hasOwnProperty(numberPlate)) {
    console.log(
      "Current details for the vehicle with number plate " + numberPlate + ":"
    );
    console.log(RTORecords[numberPlate]);

    console.log("Enter new details for the vehicle:");
    const updatedDetails = {};
    updatedDetails.vehicleName = readlineSync.question("Vehicle Name: ");
    updatedDetails.vehicleCompany = readlineSync.question("Vehicle Company: ");
    updatedDetails.vehicleColor = readlineSync.question("Vehicle Color: ");
    updatedDetails.insuranceNumber =
      readlineSync.question("Insurance Number: ");
    updatedDetails.vehicleOwner = readlineSync.question("Vehicle Owner: ");
    updatedDetails.vehicleType = readlineSync.question("Vehicle Type: ");

    const fine = {};
    console.log(
      "Enter updated fine details for the vehicle (Enter 'done' to finish):"
    );
    while (true) {
      const violation = readlineSync.question("Violation: ");
      if (violation === "done") break;
      const fineAmount = parseInt(readlineSync.question("Fine Amount: "));
      fine[violation] = fineAmount;
    }
    updatedDetails.Fine = fine;

    RTORecords[numberPlate] = updatedDetails;
    console.log(
      "Details updated successfully for the vehicle with number plate " +
        numberPlate +
        ":"
    );
    console.log(RTORecords[numberPlate]);
  } else {
    console.log("Vehicle with this number plate does not exist in records.");
  }
}

function deleteVehicleByNumberPlate() { 
  const numberPlate = readlineSync.question(
    "Enter the number plate to delete the vehicle: "
  );
  if (RTORecords.hasOwnProperty(numberPlate)) {
    delete RTORecords[numberPlate];
    console.log(
      "Vehicle with number plate " +
        numberPlate +
        " has been deleted successfully!"
    );
  } else {
    console.log("Vehicle with this number plate does not exist in records.");
  }
}

const menu = {
  1: "Add a new vehicle",
  2: "Check details by number plate",
  3: "Update details by number plate",
  4: "Delete a vehicle by number plate",
  5: "Exit",
};

function displayMenu() {
  console.log("\nOperations Menu:");
  for (const key in menu) {
    console.log(`${key}. ${menu[key]}`);
  }
}

const operations = {
  1: addNewVehicle,
  2: checkDetailsByNumberPlate,
  3: updateDetailsByNumberPlate,
  4: deleteVehicleByNumberPlate,
  5: function () {
    console.log("Exiting...");
    process.exit(0);
  },
};

// Main loop
while (true) {
  displayMenu();
  const choice = readlineSync.question("Enter your choice: ");
  if (operations.hasOwnProperty(choice)) {
    operations[choice]();
  } else {
    console.log("Invalid choice. Please enter a valid option.");
  }
 }


















