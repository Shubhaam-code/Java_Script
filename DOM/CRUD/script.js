//  create element by dom

// 1

// const element=document.createElement("h2")
// element ko abb or ache define karte jaise text dal kar id dal kar

// element.textContent="HELLO NAVYA"
// element.id="second"

// 2
// insert the element
// const p1=document.getElementById("first")
// p1.after(element) 


// const element2=document.createElement("h3")
// element2.textContent="diwali chali gai"
// element2.id="third"
// element2.className="group"  // classname likha class nhi likha qki class reserved keyword hai
// element2.className="holi" // override kar dega upar wala class name ko or holi ho jaeyga
// ek or tarika 
// element2.className+=" holi"

//3 why khud sochna
// element2.classList.add("diwali")
// element2.classList.add("holi")
// element2.classList.add("chutiya")
// element2.classList.remove("diwali")

// element2.style.backgroundColor="pink";

// p1.after(element2)

// khud ka attribute 

// element2.getAttribute("class")



// after before ho gaya ab mujhe list ke andar dalna hai 

// 4 

// const p1=document.createElement("li")
// p1.textContent="milk"

// const p2=document.createElement("li")
// p2.textContent="cake"
// p2.id="cake"

// const p3=document.createElement("li")
// p3.textContent="halwa"

// const p4=document.createElement("li")
// p4.textContent="panner"

// const element=document.getElementById("list")
// element.append(p1)
// element.append(p2)
// element.prepend(p3)

// p1.after(p4)


// real word example
//  suppose ek food list usko dalna hai

// const arr=["milk","cake","panner"]

// const element=document.getElementById("list")


// for(let food of arr){
//     const list=document.createElement("li")
//     list.textContent=food;
//     // yaha tak create ho gaya hai

//     // ab insert karte hai

//     element.append(list)
// }


// 5 why khud sochna

// fragment

// const arr=["milk","cake","panner"]


// const element=document.getElementById("list")
// const fragment=document.createDocumentFragment();

// for(let food of arr){
//     const list=document.createElement("li")
//     list.textContent=food;
//     fragment.append(list)

    
// }
// element.append(fragment)


// 6  delete karna ab sikho

// const p1=document.getElementById("second")
// p1.remove();

