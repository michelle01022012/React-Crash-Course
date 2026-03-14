import React, { useState } from 'react';

function Counter() {
      const [counter, setCounter] = useState(0)
      function incrementCounter() {
        setCounter(counter + 1)
      }
   
    function decrementCounter() {
        setCounter(counter - 1)
    }
    return (
        <div>
            <button>-</button>
             {0}
            <button>+</button>
        </div>
    )
}

export default Counter 