var rls=require('readline-sync');

const Admin=
{
    isAdmin:true
}
const user={
    name:"shubham",
    age:25,
   __proto__:Admin,
}


console.log(user)