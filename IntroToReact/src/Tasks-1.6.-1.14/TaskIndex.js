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
            <p>   bad {bad} </p>
            <p> all {good + neutral + bad} </p>
            <p> average {(good+neutral+bad)/3} </p>
            <p> average good {good / ( good + neutral + bad )} </p>
            <p>average neutral {neutral / ( good + neutral + bad )}</p>
            <p>average bad {bad / ( good + neutral + bad )} </p>
            <p>positive {good / ( good + neutral + bad ) * 100}% </p>
        </div>
    );
}

export default TaskIndex;
