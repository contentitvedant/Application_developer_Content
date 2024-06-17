// Import the readline-sync module for synchronous user input
const readline = require('readline-sync');


// instantiating object 
class Item {
  constructor(name, category, price, quantity) {
    Object.assign(this, { name, category, price, quantity });
  }
}

Item.prototype.display = function() {
    return `Item Details:
    Name: ${this.name}
    Category: ${this.category}
    Price: $${this.price}
    Quantity: ${this.quantity}\n`;
  };

class Inventory {
  constructor() {
    this.items = [];
  }
}

Inventory.prototype.addItem = function(item) {
  this.items.push(item);
};

// The filter method creates a new array excluding items that match the provided itemName.
//  It returns a new array containing only
//  the items for which the condition item.name !== itemName is true, effectively
//   removing the specified item.

Inventory.prototype.removeItem = function(itemName) {
  this.items = this.items.filter(item => item.name !== itemName);
};

// The map method transforms each item in the items array by calling the display method on it. 
// This returns a new array of strings, each representing an item's details. 
// The join('\n') method concatenates these strings with newline characters.

Inventory.prototype.displayItems = function() {
  return this.items.length ? this.items.map(item => item.display()).join('\n') : 'No items in inventory.';
};



Inventory.prototype.findItem = function(itemName) {
  return this.items.find(item => item.name === itemName);
};

// The reduce method iterates over each item in the items array, accumulating the total
//  value by summing the product of price and quantity for each item. 
//  The initial value of total is set to 0.
Inventory.prototype.calculateTotalValue = function() {
  return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const prompt = (q) => readline.question(q);

const promptItemDetails = () => new Item(
  prompt('Enter item name: '),
  prompt('Enter item category: '),
  parseFloat(prompt('Enter item price: ')),
  parseInt(prompt('Enter item quantity: '), 10)
);

const main = () => {
  const inventory = new Inventory();

  while (true) {
    console.log(`
1. Add Item
2. Remove Item
3. Display Items
4. Find Item
5. Calculate Total Inventory Value
6. Exit`);
    
    const choice = prompt('Enter your choice: ');

    switch (choice) {
      case '1':
        inventory.addItem(promptItemDetails());
        console.log('Item added successfully.');
        break;
      case '2':
        inventory.removeItem(prompt('Enter the name of the item to remove: '));
        console.log('Item removed successfully.');
        break;
      case '3':
        console.log('\nInventory:\n' + inventory.displayItems());
        break;
      case '4':
        const item = inventory.findItem(prompt('Enter the name of the item to find: '));
        console.log(item ? item.display() : 'Item not found');
        break;
      case '5':
        console.log('Total inventory value: $' + inventory.calculateTotalValue().toFixed(2));
        break;
      case '6':
        console.log('Exiting...');
        process.exit();
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
};

main();

