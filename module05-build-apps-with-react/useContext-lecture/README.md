# React State Management Examples

This part of the repository contains three different implementations of the same application, each demonstrating a different approach to state management in React.

## 1. `1_useContext/` - Context API with useState

**Approach:** Uses React's Context API with `useState` for state management.

**Key Characteristics:**

- State is managed using `useState` in a context provider
- State and state updater functions are passed through React Context
- No prop drilling needed
- Clean and simple for small to medium applications
- Best when state needs to be shared across multiple components

**Files to look at:**

- `src/context/UserContext.jsx` - Contains the context and provider with useState
- `src/App.jsx` - Wraps the app with the provider
- `src/components/ComponentC.jsx` - Consumes the context using `useContext`

## 2. `2_useReducer/` - useReducer with Prop Drilling

**Approach:** Uses `useReducer` in a parent component with prop drilling to pass state down.

**Key Characteristics:**

- State is managed using `useReducer` in ComponentA (parent component)
- State and updater functions are passed down through ComponentB to ComponentC (prop drilling)
- Demonstrates how to lift state up and pass it down through multiple levels
- Good for component trees that aren't too deep
- Simpler than Context API but can become cumbersome with deeply nested components

**Files to look at:**

- `src/components/ComponentA.jsx` - Contains the reducer logic and manages state
- `src/components/ComponentB.jsx` - Middle component that passes props through
- `src/components/ComponentC.jsx` - Receives state and updaters as props
- `src/App.jsx` - Simple container that renders ComponentA

## 3. `3_useContext_useReducer/` - Context API with useReducer

**Approach:** Combines both Context API and `useReducer` for global state management.

**Key Characteristics:**

- Uses `useReducer` for complex state logic
- Uses Context API to provide state throughout the component tree
- No prop drilling needed
- Ideal for medium to large applications with complex state
- Provides a clean way to manage and update global state

**Files to look at:**

- `src/context/UserContext.jsx` - Contains the context, reducer, and provider
- `src/App.jsx` - Wraps the app with the provider
- `src/components/ComponentC.jsx` - Consumes the context

## How to Run

Each version is a separate React application. To run any version:

```bash
cd 1_useContext  # or 2_useReducer or 3_useContext_useReducer
npm install
npm run dev
```

## When to Use Each Approach

1. **Context + useState**

   - Simple global state needs
   - Small to medium applications
   - When you don't have complex state transitions

2. **Local useReducer**

   - Complex state logic in a single component
   - When state doesn't need to be shared with many components
   - For self-contained components with their own state management

3. **Context + useReducer**
   - Complex global state needs
   - Medium to large applications
   - When multiple components need to access and update the same state
   - When you want to separate state logic from components

## Key Differences

| Feature       | Context + useState | useReducer with Prop Drilling | Context + useReducer |
| ------------- | ------------------ | ----------------------------- | -------------------- |
| State Scope   | Global             | Parent component              | Global               |
| State Updates | Simple             | Complex                       | Complex              |
| Prop Drilling | No                 | Yes (through components)      | No                   |
| Best For      | Simple state       | Medium component trees        | Complex global state |
| Boilerplate   | Low                | Medium                        | Medium               |
