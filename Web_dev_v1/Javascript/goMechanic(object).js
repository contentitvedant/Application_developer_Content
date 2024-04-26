const readlineSync = require('readline-sync');

// Function to create a car object
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    tasks: [],

    // Method to add maintenance tasks
    addTask(task) {
      this.tasks.push(task);
    },

    // Method to list all maintenance tasks
    listTasks() {
      if (this.tasks.length === 0) {
        console.log("No maintenance tasks for this car.");
      } else {
        console.log(`Maintenance tasks for ${this.year} ${this.make} ${this.model}:`);
        this.tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task.description} (${task.completed ? 'Done' : 'Pending'})`);
        });
      }
    },

    // Method to delete a maintenance task
    deleteTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
        console.log("Task deleted successfully.");
      } else {
        console.log("Invalid task index.");
      }
    },

    // Method to update a maintenance task
    updateTask(index, newTask) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index] = newTask;
        console.log("Task updated successfully.");
      } else {
        console.log("Invalid task index.");
      }
    },

    // Method to mark a task as done
    markTaskDone(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log("Task marked as done.");
      } else {
        console.log("Invalid task index.");
      }
    },

    // Method to provide summary of maintenance tasks
    summary() {
      console.log(`Summary of maintenance tasks for ${this.year} ${this.make} ${this.model}:`);
      console.log(`Total tasks: ${this.tasks.length}`);
      console.log(`Pending tasks: ${this.tasks.filter(task => !task.completed).length}`);
    }
  };
}

// Function to display menu options
function displayMenu() {
  console.log("\n===== GOMECHANIC MENU =====");
  console.log("1. Add Maintenance Task");
  console.log("2. List Maintenance Tasks");
  console.log("3. Update Maintenance Task");
  console.log("4. Delete Maintenance Task");
  console.log("5. Mark Task as Done");
  console.log("6. Show Summary");
  console.log("7. Exit");
  console.log("==========================");
}

// Function to start the application
function startApp(car) {
  console.log("Welcome to GOMECHANIC!");

  while (true) {
    displayMenu();
    const choice = readlineSync.questionInt("Enter your choice: ");

    switch (choice) {
      case 1:
        const newTask = readlineSync.question("Enter maintenance task: ");
        car.addTask({ description: newTask, completed: false });
        console.log("Task added successfully.");
        break;
      case 2:
        car.listTasks();
        break;
      case 3:
        car.listTasks();
        const indexToUpdate = readlineSync.questionInt("Enter index of task to update: ");
        const newTaskDescription = readlineSync.question("Enter new task description: ");
        car.updateTask(indexToUpdate - 1, { description: newTaskDescription, completed: false });
        break;
      case 4:
        car.listTasks();
        const indexToDelete = readlineSync.questionInt("Enter index of task to delete: ");
        car.deleteTask(indexToDelete - 1);
        break;
      case 5:
        car.listTasks();
        const indexToMarkDone = readlineSync.questionInt("Enter index of task to mark as done: ");
        car.markTaskDone(indexToMarkDone - 1);
        break;
      case 6:
        car.summary();
        break;
      case 7:
        console.log("Exiting GOMECHANIC. Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please enter a number between 1 and 7.");
        break;
    }
  }
}

// Start the application with a new car
const myCar = createCar("Toyota", "Camry", 2018);
startApp(myCar);
