/*
        LECTURE 8: REACT INTERVIEW QUESTION (COUNTER)


NOTE:
- Please refer to `App.jsx` in the Lecture 5 (02counter) project for the base code used in this scenario.

THE GOAL:
- Understand React state batching and how to properly update state when the next state 
depends on the previous state.

THE SCENARIO: State Batching Concept 
- Calling `setCounter(counter + 1)` multiple times sequentially only increments the state by 1.
- React batches these calls for performance because they all reference the same unchanged 
`counter` variable during that render cycle.

THE SOLUTION: CallBack Pattern
- Use the callback form of the state setter function.
- Example: `setCounter((prevCounter) => prevCounter + 1);`
- By passing a callback, you fetch the most recent state directly from React's internal queue, 
ensuring sequential updates apply correctly.
*/