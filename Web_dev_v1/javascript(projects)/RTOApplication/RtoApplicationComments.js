const readlineSync = require("readline-sync")

// concepts applied
// 1.how to create dictionary and nested dictionary?
// 2.computed propertys
// 3.shorthand propertys
// 4.hasOwnProperty() method ,
// 

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

//concept 
// applied computed properties
// properties access using . and bracket 
// Define a function named addNewVehicle
function addVehicle() {
    // Display a message prompting the user to enter details of the new vehicle
    console.log("Enter details of the new vehicle:");
    // Prompt the user to enter the number plate of the vehicle
    const numberPlate = readlineSync.question("Number Plate: ");
    // Check if the number plate already exists in the records using the hasOwnProperty method of the RTORecords object
    if (RTORecords.hasOwnProperty(numberPlate)) {
      // Display a message indicating that the vehicle already exists in the records
      console.log("Vehicle already exists!");
      // Return from the function without modifying the records object
      return;
    }
    const vehicleName = readlineSync.question("Vehicle Name: ");
    const vehicleCompany = readlineSync.question("Vehicle Company: ");
    const vehicleColor = readlineSync.question("Vehicle Color: ");
    const insuranceNumber = readlineSync.question("Insurance Number: ");
    const vehicleOwner = readlineSync.question("Vehicle Owner: ");
    const vehicleType = readlineSync.question("Vehicle Type: ");
  
    // Initialize an empty object to store fine details for the vehicle
    const fine = {};
    // Display a message prompting  to enter fine details for the vehicle, loop until the user enters "done"
    console.log("Enter fine details for the vehicle (Enter 'done' to finish):");
    while (true) {
      // Prompt the user to enter a violation
      const violation = readlineSync.question("Violation: ");
      // If the user enters "done", exit the loop
      if (violation === "done") break;
      // Prompt the user to enter the fine amount for the violation and convert it to an integer
      const fineAmount = readlineSync.question("Fine Amount: ");
      // Add the violation and its fine amount to the fine object
      fine[violation] = fineAmount;
    }
    //shorthand properties applied here 
    // Add the details of the new vehicle to the RTORecords object using the number plate as the key
    RTORecords[numberPlate] = {
      vehicleName,
      vehicleCompany,
      vehicleColor,
      InsuranceNumber: insuranceNumber,
      vehicleOwner,
      vehicleType,
      Fine: fine, // Include the fine details in the vehicle record
      details: function () { // Define a method called details to log vehicle details
        console.log(
          `This is a ${vehicleColor} ${vehicleCompany} ${vehicleName}.`
        );
      },
    };
  
    // Display a success message indicating that the vehicle has been added successfully
    console.log(`Vehicle with number plate ${numberPlate} added successfully!`);
  }

// Define a function named checkDetailsByNumberPlate
function checkPlate() {
    // Prompt the user to enter the number plate to check details
    const numberPlate = readlineSync.question(
      "Enter the number plate to check details: "
    );
    // Check if the entered number plate exists in the records using the hasOwnProperty method of the RTORecords object
    if (RTORecords.hasOwnProperty(numberPlate)) {
      // If the number plate exists, display details for the vehicle with that number plate
      console.log(
        "Details for the vehicle with number plate " + numberPlate + ":"
      );
      console.log(RTORecords[numberPlate]); // Log the details of the vehicle with the given number plate
    } else {
      // If the number plate does not exist, display a message indicating that the vehicle with that number plate does not exist in the records
      console.log("Vehicle with this number plate does not exist in records.");
    }
  }
  

// Define a function named updateDetailsByNumberPlate
function updatePlate() {
    // Prompt the user to enter the number plate to update details
    const numberPlate = readlineSync.question(
      "Enter the number plate to update details: "
    );
  
    // Check if the entered number plate exists in the records using the hasOwnProperty method of the RTORecords object
    if (RTORecords.hasOwnProperty(numberPlate)) {
      // If the number plate exists, display current details for the vehicle with that number plate
      console.log(
        "Current details for the vehicle with number plate " + numberPlate + ":"
      );
      console.log(RTORecords[numberPlate]); // Log the current details of the vehicle with the given number plate
  
      // Prompt the user to enter new details for the vehicle
      console.log("Enter new details for the vehicle:");
      const updatedDetails = {};
      updatedDetails.vehicleName = readlineSync.question("Vehicle Name: ");
      updatedDetails.vehicleCompany = readlineSync.question("Vehicle Company: ");
      updatedDetails.vehicleColor = readlineSync.question("Vehicle Color: ");
      updatedDetails.insuranceNumber =
        readlineSync.question("Insurance Number: ");
      updatedDetails.vehicleOwner = readlineSync.question("Vehicle Owner: ");
      updatedDetails.vehicleType = readlineSync.question("Vehicle Type: ");
  
      // Initialize an empty object to store updated fine details for the vehicle
      const fine = {};
      // Prompt the user to enter updated fine details for the vehicle, loop until the user enters "done"
      console.log(
        "Enter updated fine details for the vehicle (Enter 'done' to finish):"
      );
      while (true) {
        // Prompt the user to enter a violation
        const violation = readlineSync.question("Violation: ");
        // If the user enters "done", exit the loop
        if (violation === "done") break;
        // Prompt the user to enter the fine amount for the violation and convert it to an integer
        const fineAmount = parseInt(readlineSync.question("Fine Amount: "));
        // Add the violation and its fine amount to the fine object
        fine[violation] = fineAmount;
      }
      // Add the updated details, including fine details, to the RTORecords object using the number plate as the key
      updatedDetails.Fine = fine;
      RTORecords[numberPlate] = updatedDetails;
      // Display a success message indicating that the details have been updated successfully for the vehicle with the given number plate
      console.log(
        "Details updated successfully for the vehicle with number plate " +
          numberPlate +
          ":"
      );
      console.log(RTORecords[numberPlate]); // Log the updated details of the vehicle with the given number plate
    } else {
      // If the number plate does not exist, display a message indicating that the vehicle with that number plate does not exist in the records
      console.log("Vehicle with this number plate does not exist in records.");
    }
  }

// deleteVehicleByNumberPlate
function deletePlate() {
    // Prompt the user to enter the number plate to delete the vehicle
    const numberPlate = readlineSync.question(
      "Enter the number plate to delete the vehicle: "
    );
  
    // Check if the entered number plate exists in the records using the hasOwnProperty method of the RTORecords object
    if (RTORecords.hasOwnProperty(numberPlate)) {
      // If the number plate exists, delete the vehicle record associated with that number plate from the RTORecords object
      delete RTORecords[numberPlate];
      // Display a success message indicating that the vehicle with the given number plate has been deleted successfully
      console.log(
        "Vehicle with number plate " +
          numberPlate +
          " has been deleted successfully!"
      );
    } else {
      // If the number plate does not exist, display a message indicating that the vehicle with that number plate does not exist in the records
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
    1: addVehicle,
    2: checkPlate,
    3: updatePlate,
    4: deletePlate,
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
  



  



