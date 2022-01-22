import React, { useState } from "react";

const Statistics = (props) => {
    const { count, text } = props;
    return (
        <p>
            {text} {count}
        </p>
    );
};
const Button = ({text, handleClick}) => {
    return <button onClick={handleClick}>{text}</button>;
};

function TaskIndex() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClicks = ( setValue, value ) =>
    {
        setValue( value + 1 )
    }

    let sum = good + neutral + bad;
    let average = ( good - bad ) / sum;
    let positive = good / sum;


    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={()=>handleClicks( setGood, good)} text="good" />
            <Button handleClick={()=> handleClicks(setNeutral, neutral)} text="neutral" />
            <Button handleClick={()=>handleClicks(setBad, bad)} text="bad" />

            <h1>Statistics</h1>
            <Statistics count={good} text="good" />
            <Statistics count={neutral} text="neutral" />
            <Statistics count={bad} text="bad" />
            <Statistics text="all" count={sum} />
            <Statistics text="average" count={average} />
            <Statistics
                text="positive"
                count={positive}
            />
       
        </div>
    );
}

export default TaskIndex;
