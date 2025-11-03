// CRUD Operation

// Create
let user={
    name:"shubham",
    age:21,
    adress : {
        city : "gaya",
        pincode: 823002
    },
    greeting : function(){
        console.log(`Comeback Is Coming Soon ${this.name} `)
    }

   

    
}

// console.log(user)

// Read

// console.log(user.age)

// Upadate

// user.skill="JAVA SCRIPT";
// user.age=22

// console.log(user)

// Delete

// delete user.skill;

// console.log(user)


// Iteration

// for(let key in user){
//     console.log(key,user[key])
// }


// Object Destrucing

// const {name,city}=user;


// const user2=user;
// user2.age=31;
// call by refernece b/c changes happen in user2 but also occur in user1
// console.log(user)

// const user3={...user};

// user3.age=31;
// user3.adress.city="pune"
// console.log(user)


// Deep Copy
// const user4=structuredClone(user)
// user4.adress.city="pune"
// console.log(user)

// user.greeting();


let user2={
    name:"Mohan",
    age:90
}

user2.greeting=user.greeting;

// console.log(user2)
user2.greeting();


