// Import the readline-sync module for synchronous user input
const readline = require('readline-sync');

// Define the Item class to represent items in the inventory
class Item {
  // Constructor to initialize properties of an item
  constructor(name, category, price, quantity) {
    // Assign properties to the item object
    Object.assign(this, { name, category, price, quantity });
  }
}

// Add a prototype method to display item details
Item.prototype.display = function() {
    // Format and return item details as a string with each detail on a separate line
    return `Item Details:
    Name: ${this.name}
    Category: ${this.category}
    Price: $${this.price}
    Quantity: ${this.quantity}\n`;
  };
  
// Define the Inventory class to manage items
class Inventory {
  // Constructor to initialize an empty array to store items
  constructor() {
    this.items = [];
  }
}

// Add prototype methods to the Inventory class
Inventory.prototype.addItem = function(item) {
  // Method to add an item to the inventory
  this.items.push(item);
};

Inventory.prototype.removeItem = function(itemName) {
  // Method to remove an item from the inventory
  this.items = this.items.filter(item => item.name !== itemName);
};

Inventory.prototype.displayItems = function() {
  // Method to display all items in the inventory
  return this.items.length ? this.items.map(item => item.display()).join('\n') : 'No items in inventory.';
};

Inventory.prototype.findItem = function(itemName) {
  // Method to find an item by name in the inventory
  return this.items.find(item => item.name === itemName);
};

Inventory.prototype.calculateTotalValue = function() {
  // Method to calculate the total value of all items in the inventory
  return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Helper function to prompt user for item details and create an Item object
const promptItemDetails = () => {
  const name = readline.question('Enter item name: ');
  const category = readline.question('Enter item category: ');
  const price = parseFloat(readline.question('Enter item price: '));
  const quantity = parseInt(readline.question('Enter item quantity: '), 10);
  return new Item(name, category, price, quantity);
};

// Main interactive loop for managing the inventory
const main = () => {
  // Create a new instance of the Inventory class
  const inventory = new Inventory();
  // Define actions for user choices
  const actions = {
    // Add an item to the inventory
    '1': () => {
      inventory.addItem(promptItemDetails());
      console.log('Item added successfully.');
    },
    // Remove an item from the inventory
    '2': () => {
      inventory.removeItem(readline.question('Enter the name of the item to remove: '));
      console.log('Item removed successfully.');
    },
    // Display all items in the inventory
    '3': () => {
      console.log('\nInventory:\n' + inventory.displayItems());
    },
    // Find an item in the inventory by name
    '4': () => {
      const foundItem = inventory.findItem(readline.question('Enter the name of the item to find: '));
      console.log(foundItem ? foundItem.display() : 'Item not found');
    },
    // Calculate and display the total value of all items in the inventory
    '5': () => {
      console.log('Total inventory value: $' + inventory.calculateTotalValue().toFixed(2));
    },
    // Exit the program
    '6': () => {
      console.log('Exiting...');
      process.exit();
    },
    // Default action for invalid choices
    'default': () => {
      console.log('Invalid choice. Please try again.');
    }
  };

  // Main loop to display menu and handle user input
  while (true) {
    // Display menu options
    console.log(
    `\n1. Add Item
     \n2. Remove Item
     \n3. Display Items
     \n4. Find Item
     \n5. Calculate Total Inventory Value
     \n6. Exit`
);
    // Prompt user for choice
    const choice = readline.question('Enter your choice: ');
    // Execute corresponding action based on user choice
    (actions[choice] || actions['default'])();
  }
};

// Run the main interactive loop
main();
