//1st  
// event action


// function handleclick(){
//   const element = document.getElementById("first"); // select hua element
//   element.textContent="GOOD NIGHT SHUBHAM" // select element pe kuch action karna
// }


//2nd and why khud sochna
// const element = document.getElementById("first"); // element select hai

// element.onclick=function(){
//   element.textContent="GOOD NIGHT SHUBHAM"
//   element.style.backgroundColor="pink"
// }

// element.onclick=function(){
//   element.textContent="GOOD NIGHT ALOK"
// }

//3rd and why khud sochna


// const element = document.getElementById("first");

// element.addEventListener("click",()=>{
//   element.textContent="good night shubham"
// })

// element.addEventListener("click",()=>{
//   element.style.backgroundColor="pink"
// })


// 4th and why khud sochna

// const element = document.getElementById("child1");
// element.addEventListener("click",()=>{
//   element.textContent="clicked"
// })

// 5th and why khud sochna

// const parent = document.getElementById("parent");
// console.log(parent.children) ///parent.child se humne sara child uske html collection me mil jate hai


// for(let child of parent.children){
//   child.addEventListener("click",()=>{
//     child.textContent="clicked"
// })

// }


// BUBLING 

// 1


// const grandparent=document.getElementById("grandparent")
// grandparent.addEventListener('click',()=>{
  
//   console.log("grandparent is clicked")
  
// }
// )

// const parent=document.getElementById("parent")
// parent.addEventListener('click',()=>{
  
//   console.log("parent is clicked")
  
// }
// )

// const child=document.getElementById("child")
// child.addEventListener('click',()=>{
  
//   console.log("child is clicked")
  
// }
// )



// 2


// const grandparent=document.getElementById("grandparent")
// grandparent.addEventListener('click',()=>{
  
//   console.log("grandparent is clicked")
  
// },true
// )

// const parent=document.getElementById("parent")
// parent.addEventListener('click',()=>{
  
//   console.log("parent is clicked")
  
// },true
// )

// const child=document.getElementById("child")
// child.addEventListener('click',()=>{
  
//   console.log("child is clicked")
  
// },true // true means capture phase on hai y
// )

// capture phase on hai = top to bottom 
// capture pahse off hai = bubbling phase v bolte hai = botton to top chalta hai


//4 event ka object kaise aata hai


// const grandparent=document.getElementById("grandparent")
// grandparent.addEventListener('click',(e)=>{
//   console.log(e.target)  
// }
// )

// const parent=document.getElementById("parent")
// parent.addEventListener('click',(e)=>{
  
//   console.log(e)
  
// }
// )

// const child=document.getElementById("child")
// child.addEventListener('click',(e)=>{
  
//   console.log(e)
//   e.stopPropagation(); // bubbling off hai
  
// }
// )


//5  and why khud sochna

// const element = document.getElementById("parent");
// element.addEventListener("click",(e)=>{
//   e.target.textContent="clicked"
// })



// Remove event listener

// const parent = document.getElementById("parent");

// function handleclick(e){
//   e.target.textContent="clicked"
//   parent.removeEventListener('click',handleclick)
// }

// parent.addEventListener('click',handleclick)










