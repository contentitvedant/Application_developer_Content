const readlineSync = require("readline-sync");

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

function addVehicle() {
  console.log("Enter details of the new vehicle:");
  const numberPlate = readlineSync.question("Number Plate: ");
  if (RTORecords.hasOwnProperty(numberPlate)) {
    console.log("Vehicle already exists!");
    return;
  }
  const vehicleName = readlineSync.question("Vehicle Name: ");
  const vehicleCompany = readlineSync.question("Vehicle Company: ");
  const vehicleColor = readlineSync.question("Vehicle Color: ");
  const insuranceNumber = readlineSync.question("Insurance Number: ");
  const vehicleOwner = readlineSync.question("Vehicle Owner: ");
  const vehicleType = readlineSync.question("Vehicle Type: ");

//   const fine = {};
//   console.log("Enter fine details for the vehicle (Enter 'done' to finish):");
//   while (true) {
//     const violation = readlineSync.question("Violation: ");
//     if (violation === "done") break;
//     const fineAmount = readlineSync.question("Fine Amount: ");
//     fine[violation] = fineAmount;
//   }

  RTORecords[numberPlate] = {
    vehicleName,
    vehicleCompany,
    vehicleColor,
    InsuranceNumber: insuranceNumber,
    vehicleOwner,
    vehicleType,
    // Fine: fine,
    details: function () {
      console.log(
        `This is a ${vehicleColor} ${vehicleCompany} ${vehicleName}.`
      );
    },
  };

  console.log(`Vehicle with number plate ${numberPlate} added successfully!`);
}

function checkPlate() {
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
function updatePlate() {
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
    updatedDetails.insuranceNumber = readlineSync.question("Insurance Number: ");
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

function deletePlate() {
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
function showAllRecords() {
    console.log("\nAll Vehicle Records:");
    for (const numberPlate in RTORecords) {
      console.log(`Number Plate: ${numberPlate}`, RTORecords[numberPlate]);
    
    }
  }

const menu = [
    "Add a new vehicle",
    "Check details by number plate",
    "Update details by number plate",
    "Delete a vehicle by number plate",
    "show all the Records",
    "Exit",
  ];
  
  function displayMenu() {
    console.log("\nOperations Menu:");
    menu.forEach((item, index) => console.log(`${index + 1}. ${item}`));
  }
  
  const operations = [
    addVehicle,
    checkPlate,
    updatePlate,
    deletePlate,
    showAllRecords,
    () => {
      console.log("Exiting...");
      process.exit(0);
    },
  ];
  
  while (true) {
    displayMenu();
    const choice = parseInt(readlineSync.question("Enter your choice: "), 10);
    if (choice >= 1 && choice <= operations.length) {
      operations[choice - 1]();
    } else {
      console.log("Invalid choice. Please enter a valid option.");
    }
  }
  