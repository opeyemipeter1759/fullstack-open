import React, { useState } from "react";


const Button = ( props ) =>
{ 
    const { text, onClick } = props;
    return (
        <button onClick={onClick}>{text}</button>
    )
}

function TaskIndex()
{
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState( 0 );
    const handleGoodClick = () =>
    { 
        setGood( good + 1 );
    }
    const handleNeutralClick = () =>
    {
        setNeutral( neutral + 1 );
    }
    const handleBadClick = () =>
    {
        setBad( bad + 1 );
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick } text="good" />
            <Button onClick={handleNeutralClick } text="neutral" />
            <Button onClick={ handleBadClick} text="bad" />
            <h1>Statistics</h1>
            <p>  good {good}</p>
          <p>  neutral {neutral} </p>
         <p>   bad { bad } </p>
        </div>
    );
}

export default TaskIndex;
