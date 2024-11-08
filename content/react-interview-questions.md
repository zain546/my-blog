---
   title: React Interview Questions
   description: Prepare the React JS/TS interview questions.
   slug: react-interview-questions
   date: October 8, 2024
   author: Zain Ali
   image: https://images.unsplash.com/photo-1607706009771-de8808640bcf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

### **1. What is React? Why is it used?**
**Answer:**  
React is a JavaScript library created by Facebook for building interactive and efficient UIs, especially for single-page applications. It enables developers to create large web applications that can update and render efficiently with changing data.

**Example:**  
React makes it easy to manage complex UIs by using components. Here’s a simple "Hello, World!" component:
```javascript
import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

---

### **2. What is JSX?**
**Answer:**  
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. React components often use JSX to structure their output in a familiar syntax.

**Example:**  
```javascript
const element = <h1>Hello, JSX!</h1>;
```
JSX compiles to `React.createElement()` calls, enabling the creation of React elements.

---

### **3. What are components in React?**
**Answer:**  
Components are the building blocks of a React application. A component is a self-contained module that renders some output and may contain logic and styling. Components can be functional or class-based.

**Example:**
- **Functional Component:**
  ```javascript
  function Greeting() {
    return <h1>Hello, Functional Component!</h1>;
  }
  ```

- **Class Component:**
  ```javascript
  import React, { Component } from 'react';

  class Greeting extends Component {
    render() {
      return <h1>Hello, Class Component!</h1>;
    }
  }
  ```

---

### **4. Explain the Virtual DOM and its benefits.**
**Answer:**  
The Virtual DOM (VDOM) is a lightweight copy of the actual DOM, which React uses to make UI updates more efficient. Instead of updating the real DOM directly, React updates the VDOM first and then compares it with a previous snapshot. Only the changed parts of the real DOM are updated, improving performance.

**Example:**  
```javascript
const element = <h1>Hello, World!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
React first updates `element` in the VDOM, compares it to its previous state, and only updates the actual DOM if changes are detected.

---

### **5. What are props in React?**
**Answer:**  
Props (short for "properties") are read-only inputs passed to a component from a parent component. They allow components to communicate and make components reusable by passing different data.

**Example:**
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Welcome name="Alice" /> // Renders "Hello, Alice!"
```

---

### **6. What is state in React? How is it different from props?**
**Answer:**  
State is an object that holds data specific to a component, and it can change over time. Unlike props, which are passed to a component, state is managed within the component.

**Example:**  
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
Here, `count` is stateful, allowing it to change with `setCount`.

---

### **7. Explain the lifecycle methods in React class components.**
**Answer:**  
React class components have lifecycle methods like:
- `componentDidMount()`: Runs after the component mounts.
- `componentDidUpdate()`: Runs after the component updates.
- `componentWillUnmount()`: Runs before the component is removed.

**Example:**  
```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Mounted!');
  }
  componentDidUpdate() {
    console.log('Updated!');
  }
  componentWillUnmount() {
    console.log('Unmounting...');
  }
}
```

---

### **8. What are hooks in React? Name a few commonly used ones.**
**Answer:**  
Hooks are functions that let you use state and other React features in functional components. Common hooks include:
- `useState`: For state management.
- `useEffect`: For side effects like data fetching.
- `useContext`: For accessing context.

**Example:**
```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>Timer: {count}</div>;
}
```

---

### **9. How do you handle events in React?**
**Answer:**  
In React, events are handled by attaching functions to event attributes. Event handlers in React are camelCased.

**Example:**
```javascript
function ClickButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

---

### **10. Explain `useEffect` and how it works.**
**Answer:**  
`useEffect` is a hook used for managing side effects in functional components. It runs after the component renders. You can specify dependencies so that the effect re-runs only when dependencies change.

**Example:**
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then(setData);
  }, []); // Empty array means it runs only once

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

---

### **11. What is Context API? How is it used?**
**Answer:**  
The Context API allows for sharing data globally across components without passing props down manually at each level.

**Example:**  
```javascript
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="John">
      <DisplayUser />
    </UserContext.Provider>
  );
}

function DisplayUser() {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
}
```

---

### **12. What is `useMemo` and when would you use it?**
**Answer:**  
`useMemo` memoizes the result of a function, recalculating it only when its dependencies change. This improves performance for expensive calculations.

**Example:**  
```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### **13. Explain `useCallback` and why it's useful.**
**Answer:**  
`useCallback` returns a memoized function that only changes if its dependencies change, which is useful for avoiding unnecessary re-renders, especially when passing callbacks to child components.

**Example:**  
```javascript
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Rendering Button');
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <Button onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
}
```

---

These questions cover a wide range of React concepts and should help prepare you well for front-end interviews focusing on React and TypeScript! Let me know if you'd like more advanced questions or specific topics on state management, performance, or testing in React.