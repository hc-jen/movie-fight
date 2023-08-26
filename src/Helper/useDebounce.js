import React from 'react';

const useDebounce=(func, delay = 1000 )=> {
  const [timeoutID, setTimeoutID] = React.useState(null);
  return React.useCallback(
    (...args) => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      const newTimeoutID = setTimeout(() => {
        func.apply(null, args);
      }, delay);
      
      setTimeoutID(newTimeoutID);                                                  
    },
    [func, delay, timeoutID]
  );
}
export default useDebounce;