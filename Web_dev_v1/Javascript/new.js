// What is class ? constructor? Object constructor function?
// What is a prototype and how does javascript harness the power of prototypes? What was the need? 
// Syntax of prototypes 
// Creating prototype , Accessing prototype methods, Declaring prototype’
// prototype inheritance 

// computer system builder assembly manager 
 

class system{
    constructor(systemType,monitor,keyboard,mouse,motherboard,ram,cables,earphones,drive,cpu,graphicCard,powerSupply)
    {
       this.systemType=systemType;
       this.monitor=monitor;
       this.keyboard=keyboard;
       this.mouse=mouse;
       this.motherboard=motherboard;
       this.ram=ram;
       this.cables=cables;
       this.earphones=earphones;
       this.drive=drive;
       this.cpu=cpu;
       this.graphicCard=graphicCard;
       this.powerSupply=powerSupply;
    }
  
    assembleSystem(){
        console.log(`
        
        `)
    }

}

