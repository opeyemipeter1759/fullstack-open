import React, { useState } from "react";

const Statistics = (props) => {
    const { count, text } = props;
    if ( count === 0 )
    {
        return (
            <p>
                No feedback given
            </p>
        )
    }
    else
    {
        return (
            <p>{text} {count} </p>

        )
    }
};
const Button = (props) => {
    const { text, onClick } = props;
    return <button onClick={onClick}>{text}</button>;
};

function TaskIndex() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const handleGoodClick = () => {
        setGood(good + 1);
    };
    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    };
    const handleBadClick = () => {
        setBad(bad + 1);
    };
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="good" />
            <Button onClick={handleNeutralClick} text="neutral" />
            <Button onClick={handleBadClick} text="bad" />

            <h1>Statistics</h1>
            <Statistics count={good} text="good" />
            <Statistics count={neutral} text="neutral" />
            <Statistics count={bad} text="bad" />
            <Statistics text='all' count = {good + neutral + bad} />
            <Statistics text="average" count={( good + neutral + bad ) / 3} />
            <Statistics text="positive" count={good / ( good + neutral + bad ) * 100} />
            <Statistics text="bad" count={bad / ( good + neutral + bad ) * 100} />
            <Statistics text="good" count={good / ( good + neutral + bad ) * 100} />
            <Statistics text="neutral" count={neutral / ( good + neutral + bad ) * 100} />
        </div>
    );
}

export default TaskIndex;
