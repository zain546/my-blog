---
   title: CSS In React
   description: Explore advanced CSS techniques in React with TypeScript.
   slug: advanced-css-techniques-in-react
   date: October 1, 2024
   author: Zain Ali
   image: https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

### Advanced CSS Techniques in React with TypeScript

As you work with React and TypeScript, managing CSS effectively can make a big difference in the scalability and maintainability of your application. In this post, we’ll cover advanced CSS techniques specifically geared towards React + TypeScript applications, including the use of CSS Modules, Styled Components, CSS animations, and responsive design strategies.

---

#### 1. **Using CSS Modules for Scoped Styling**

CSS Modules allow you to scope CSS classes locally to components, avoiding global conflicts in large applications. In a TypeScript setup, CSS Modules can be imported directly and used like this:

```tsx showLineNumbers {2} 
// App.module.css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #007bff;
}

// App.tsx showLineNumbers
import React from 'react';
import styles from './App.module.css';

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.item}></div>
  </div>
);

export default App;
```

**Tip:** Create a `*.d.ts` file (e.g., `App.module.css.d.ts`) to declare CSS module types in TypeScript. This helps avoid TypeScript errors when importing CSS Modules:

```typescript showLineNumbers 
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
```

---

#### 2. **Styled Components for Dynamic Styling**

Styled Components is a popular CSS-in-JS library for styling React components, with TypeScript support. It’s great for conditional styling, theming, and organizing CSS alongside components.

```tsx showLineNumbers
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const Item = styled.div<{ primary: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#4caf50')};
`;

const App: React.FC = () => (
  <Container>
    <Item primary={true}></Item>
  </Container>
);

export default App;
```

**Suggestion:** For projects with both light and dark themes, consider using a theme provider with Styled Components for centralized theme management.

---

#### 3. **Adding Animations with CSS and React**

Animations bring interactivity to your application, and CSS animations can be triggered in React to enhance user engagement. Using keyframes, you can define animations and apply them based on state.

```tsx showLineNumbers {4}
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div<{ isVisible: boolean }>`
  width: 200px;
  height: 100px;
  background-color: #ff5722;
  color: white;
  animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 0.5s ease-in-out;
`;

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Animation</button>
      <AnimatedDiv isVisible={isVisible}>Hello, Animated World!</AnimatedDiv>
    </div>
  );
};

export default App;
```

**Tip:** Use `styled-components`’ `keyframes` helper to define animations, which makes the code more modular and readable.

---

#### 4. **CSS Variables for Theming and Consistency**

CSS variables can be particularly useful for theming, as they allow you to set values globally and reuse them across components.

```tsx showLineNumbers
// styles/variables.css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
}

// App.module.css showLineNumbers
.container {
  font-size: var(--font-size);
  color: var(--primary-color);
}

// App.tsx showLineNumbers
import React from 'react';
import './styles/variables.css';
import styles from './App.module.css';

const App: React.FC = () => (
  <div className={styles.container}>
    <p>Using CSS Variables in React + TypeScript</p>
  </div>
);

export default App;
```

**Suggestion:** When using CSS variables with React, you can dynamically change them by updating the `style` property on the root element (e.g., `document.documentElement.style.setProperty('--primary-color', '#FF0000')`).

---

#### 5. **Responsive Typography with `clamp()`**

`clamp()` is a powerful CSS function that allows you to set a minimum, preferred, and maximum size for fonts, creating responsive typography that scales smoothly across devices.

```css showLineNumbers
// styles/global.css
h1 {
  font-size: clamp(1.5rem, 2.5vw, 3rem);
}
```

In React, you can manage this in a global CSS file or in CSS Modules, giving a responsive font size without media queries.

**Tip:** Use `clamp()` for font sizes, padding, or margins to make your design scale seamlessly on different screen sizes.

---

#### 6. **Optimizing Media Queries with CSS Modules and Styled Components**

Responsive design is crucial, and both CSS Modules and Styled Components make handling media queries straightforward.

**Example with CSS Modules**

```css showLineNumbers
// App.module.css
.container {
  background-color: #f3f3f3;
}
@media (min-width: 768px) {
  .container {
    background-color: #007bff;
  }
}
```

**Example with Styled Components**

```tsx showLineNumbers
const Container = styled.div`
  background-color: #f3f3f3;

  @media (min-width: 768px) {
    background-color: #007bff;
  }
`;
```

**Suggestion:** Keep your media queries DRY (Don’t Repeat Yourself) by creating reusable mixins or variables for common breakpoints.

---

### Final Tips and Best Practices

1. **Type Safety with Styled Components**: TypeScript can help ensure that your styled components receive only the props they expect. Define types for props explicitly to catch errors early.
   
2. **Organize CSS Efficiently**: Use CSS Modules or Styled Components to encapsulate styles. Avoid large, global CSS files whenever possible.

3. **Plan for Theme Flexibility**: Use CSS variables or a theme provider from the start if you plan on supporting light and dark themes.

4. **Use Dev Tools**: Both Chrome DevTools and VS Code extensions like `styled-components` or `CSS Modules` snippets can improve productivity and help catch styling issues.

Advanced CSS in React with TypeScript can elevate your app's user experience, making it more engaging and polished. Try these techniques to see how they can help enhance your next project.

Happy styling!