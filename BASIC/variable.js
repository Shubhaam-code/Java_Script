
function demo() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // ✅ 10
  console.log(b); // ❌ ReferenceError
  console.log(c); // ❌ ReferenceError
}
demo();

/*
🧠 Explanation:

1.var → function scoped → accessible inside whole function

2.let and const → block scoped → accessible only inside { }

*/