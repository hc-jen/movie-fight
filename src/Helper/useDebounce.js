import React from 'react';

export default function useDebounce(func, delay = 1000 ) {
  const [timeoutID, setTimeoutID] = React.useState(null);
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    const timeout = setTimeout(()=> {
      func.apply(null, args);
    }, delay)
    setTimeoutID(timeout)
  }
}