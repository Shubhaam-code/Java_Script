
// Declartion
// store heterogenous element
let arr=[10,"rohit",true]

console.log(arr)
// Size of array
console.log("Size of array ",arr.length)

// array is mutable
arr[1]="Shubham";
console.log("After change in array ",arr)

arr.push(50);
arr.push("ram")
console.log(arr.pop())

arr.unshift("rahul");

console.log(arr.shift())

// Iteration

for(let value of arr){
    console.log(value)

}


// Method

let arr1=[10,20,30,40,50,60]
let arr2=["RAHUL","SHUBHAM","SHIVAM"]
let arr3=["Dog","Cat","Lion"]

// console.log(arr1.slice(1,3))
// console.log(arr1.splice(1,3,"Rahul",19))
// console.log(arr1)

// console.log(arr1.concat(arr2))

let arr4=[...arr1,...arr2,...arr3];
console.log(arr4)

console.log(arr1.toString())
console.log(arr1.join("-"))

let arr5=[10,20,30,[60,70,80,[50,80,10]],90]
console.log(arr5.flat(2))


