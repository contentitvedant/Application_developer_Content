var rls=require('readline-sync');

var key= rls.question("change the value")

const obj = {
    name: "roger", //property
    15:"hello",
    greet:function(){
    console.log("welcome");
    }
}

obj[key]=""


