import { useState } from 'react';
import './Text.css'

function Text({ content, color }) {

    const [counter, setCounter] = useState(0);

   const handleClick = () => setCounter(counter + 1)
    return (
        <>
        <h2 className={color}>{content}</h2>
        <p>counter: {counter}</p> 
        <button onClick={handleClick}>increase</button>
        {counter >= 10 && <span>enough!</span>}
        </>
    )
}

export default Text;