---
   title: JS Interview Questions
   description: Prepare the JavaScript interview questions.
   slug: js-interview-questions
   date: October 7, 2024
   author: Zain Ali
   image: https://images.unsplash.com/photo-1526328828355-69b01701ca6a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

### **1. What is JavaScript, and how does it differ from Java?**

JavaScript is a dynamic, lightweight, interpreted programming language used mainly to make web pages interactive. Java is a static, object-oriented programming language used to develop standalone applications.

**Example:**    
```javascript showLineNumbers
// JavaScript code
console.log("Hello, JavaScript!");
```

---

### **2. Explain `var`, `let`, and `const` in JavaScript.**

- **`var`:** Function-scoped, can be redeclared, and has hoisting behavior.
- **`let`:** Block-scoped, cannot be redeclared, but can be reassigned.
- **`const`:** Block-scoped, cannot be redeclared or reassigned.

**Example:**
```javascript showLineNumbers
var x = 10;
let y = 20;
const z = 30;
x = 15; // Allowed
y = 25; // Allowed
// z = 35; // Error: Assignment to constant variable
```

---

### **3. What are closures in JavaScript?**

A closure is a function that retains access to its outer scope, even after the outer function has finished executing.

**Example:**
```javascript showLineNumbers
function outer() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}
const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

### **4. Explain `==` vs. `===` in JavaScript.**

- **`==`:** Checks for equality of value, with type coercion.
- **`===`:** Checks for equality of value and type.

**Example:**
```javascript showLineNumbers
console.log(2 == "2");  // true (type coercion)
console.log(2 === "2"); // false (strict equality)
```

---

### **5. What is the difference between synchronous and asynchronous code?**

- **Synchronous Code**: Executes sequentially, blocking further execution until the current task is completed.
- **Asynchronous Code**: Executes non-sequentially, allowing other tasks to run while waiting for a task to complete (e.g., `setTimeout` or `fetch`).

**Example:**
```javascript showLineNumbers
// Synchronous
console.log("Start");
console.log("End");

// Asynchronous
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");
```

---

### **6. What is a promise?**

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

**Example:**
```javascript showLineNumbers
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
});
promise.then(result => console.log(result)); // Logs "Success" after 1 second
```

---

### **7. What is hoisting in JavaScript?**

Hoisting is JavaScript's default behavior of moving declarations to the top of the scope. Only variable and function declarations are hoisted, not initializations.

**Example:**
```javascript showLineNumbers
console.log(x); // undefined due to hoisting
var x = 5;
```

---

### **8. Explain `.call()`, `.apply()`, and `.bind()` methods in JavaScript.**

- **`.call()`:** Calls a function with a specified `this` context and individual arguments.
- **`.apply()`:** Similar to `.call()`, but takes an array of arguments.
- **`.bind()`:** Returns a new function, permanently binding `this` to the specified object.

**Example:**
```javascript showLineNumbers
const person = {
    name: "Alice",
    greet(age) {
        console.log(`Hello, I'm ${this.name} and I'm ${age} years old.`);
    }
};

person.greet.call({ name: "Bob" }, 25); // Hello, I'm Bob and I'm 25 years old.
person.greet.apply({ name: "Charlie" }, [30]); // Hello, I'm Charlie and I'm 30 years old.
const boundGreet = person.greet.bind({ name: "Dave" });
boundGreet(35); // Hello, I'm Dave and I'm 35 years old.
```

---

### **9. Explain `map()`, `filter()`, and `reduce()` array methods.**

- **`map()`:** Returns a new array with results of calling a function on every element.
- **`filter()`:** Returns a new array with elements that pass a condition.
- **`reduce()`:** Executes a reducer function on each element, resulting in a single value.

**Example:**
```javascript showLineNumbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((total, num) => total + num, 0); // 15
```

---

### **10. What is destructuring in JavaScript?**

Destructuring allows extracting values from arrays or properties from objects into distinct variables.

**Example:**
```javascript showLineNumbers
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Alice
console.log(age);  // 25
```

---

### **11. Explain event delegation.**

Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements.

**Example:**
```html showLineNumbers
<div id="parent">
    <button class="child">Click me!</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", (event) => {
    if (event.target.classList.contains("child")) {
        console.log("Button clicked!");
    }
});
</script>
```

---

### **12. What is currying in JavaScript?**

Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

**Example:** 
```javascript showLineNumbers
function add(a) {
    return function(b) {
        return a + b;
    };
}
const add5 = add(5);
console.log(add5(10)); // 15
```

---

### **13. How does async/await work in JavaScript?**

`async/await` is a syntactic sugar for handling asynchronous code more easily, making asynchronous code appear synchronous.

**Example:**
```javascript showLineNumbers
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}
fetchData();
```

---

### **14. What are arrow functions, and how are they different from regular functions?**

Arrow functions provide a shorter syntax and do not have their own `this` context, making them ideal for callbacks and array methods.

**Example:**
```javascript showLineNumbers
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

### **15. Explain debouncing and throttling in JavaScript.**

- **Debouncing**: Limits the rate of execution by waiting for a specified delay after the last trigger.
- **Throttling**: Limits the rate of execution to a fixed interval, ignoring additional triggers within that period.

**Example (Debouncing):**
```javascript showLineNumbers
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
```

---

### **16. What is the difference between shallow and deep copy in JavaScript?**

- **Shallow Copy**: Only copies the first level of data. Changes in nested objects reflect in the copied object.
- **Deep Copy**: Copies all levels of data. Changes in nested objects do not affect the original.

**Example:**
```javascript showLineNumbers
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
const deepCopy = JSON.parse(JSON.stringify(original));
```

---

Mastering these concepts with practical examples will prepare you for many JavaScript interview questions at all levels!