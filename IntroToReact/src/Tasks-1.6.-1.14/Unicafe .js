import React, { useState } from "react";

const Button = ({ text, handleClick }) => {
    return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = (props) => {
    const { count, text } = props;
    return (
        <tr>
            <td> {text}</td>
            <td> {count} </td>
        </tr>
    );
};

const Statistics = ( props ) =>

{
    let feedback = props.feedback;
    let statistcs;
    if ( props.feedback.all < 1 )
    {
        statistcs = <p>
            no feedback yet
        </p>
    }
    else
    {
        statistcs = (
            <table>
                <tbody>

                <StatisticLine text="good" count={feedback.good} />
                <StatisticLine text="bad" count={feedback.bad} />
                <StatisticLine text="neutral" count={feedback.neutral} />
                <StatisticLine text="positive" count={feedback.positive + "%"} />
                <StatisticLine text="average" count={feedback.average} />

                <StatisticLine text="all" count={feedback.all} />
                </tbody>
            </table>
        );
    }
    return (
        <div>
            Statistics
            {statistcs}
        </div>
    )
};

function TaskIndex() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClicks = (setValue, value) => {
        setValue(value + 1);
    };

    let sum = good + neutral + bad;
    let average = (good - bad) / sum;
    let positive = good / sum;

    const feedback = {
        good: good,
        bad: bad,
        neutral: neutral,
        all: sum,
        average: average,
        positive: positive,
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button
                handleClick={() => handleClicks(setGood, good)}
                text="good"
            />
            <Button
                handleClick={() => handleClicks(setNeutral, neutral)}
                text="neutral"
            />
            <Button handleClick={() => handleClicks(setBad, bad)} text="bad" />

          <Statistics feedback ={feedback} />
          
        </div>
    );
}

export default TaskIndex;
