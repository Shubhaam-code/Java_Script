// 1
// fetch data lata hai kahi se



// console.log("HELLO WORLD")
// const p1= fetch("https://api.github.com/users")
// console.log(p1) //  initially pending mai hoga 

// read only at stage fullfilled stage , reject stage

// p1.then((response)=>{
//     console.log(response)
// })

// isa data bytes ke form me aata hai isko object me convert karna hoga

// 2


// p1.then((response)=>{
//     console.log(response.json())   // response.json() ye v turnt data nhi deta hai (asynchronization)
// })

// const p2=p1.then((response)=>{
//     return response.json()  
// })

// p2.then((data)=>{
//     console.log(data)
// })


// 3 why khud sochna
// promise chaining kar rahe hai


// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })






