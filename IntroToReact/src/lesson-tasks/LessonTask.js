import React, { useState } from "react";
import Contents from "./Contents";
import Header from "./Header";
import Total from "./Total";
import Hello from "./Hello";

const History = ( props ) =>
{
    const { allClicks } = props;
    if ( allClicks.length === 0 )
    {
        return <div>the app is used by pressing the buttons</div>;
    }
    return <div>button press History : {allClicks.join( "" )}</div>;
};

const Button = ( props ) =>
{
    const { handleClick, text } = props;
    return <button onClick={handleClick}>{text}</button>;
};

const Display = ( props ) => <div> {props.value} </div>

function LessonTasks()
{
    // const name = "peter";
    // const age = 30;
    // const course = {
    //     name: 'Half Stack LessonTaskslication development',
    //     parts: [
    //         {
    //             name: 'Fundamentals of React',
    //             exercises: 10
    //         }
    //         , {
    //             name: 'Using props to pass data',
    //             exercises: 14
    //         },
    //         {
    //             name: "State of a component",
    //             exercises: 14
    //         }
    //     ]
    // }
    // const [counter, setCounter] = useState(0);

    // setInterval(
    //     () => setCounter(counter + 1), 1000
    // )
    // console.log( counter );
    // const handleClick = () =>
    // {
    //     setCounter( counter + 1 )
    // }

    const [left, setLeft] = useState( 0 );
    const [right, setRight] = useState( 0 );
    const [allClicks, setAll] = useState( [] );
    const [value, setValue] = useState( 10 );

    const setToValue = ( newValue ) =>
    {
        setValue( newValue );
    };

    const handleLeftClick = () =>
    {
        // setClicks( {
        //     ...clicks,
        //     left: clicks.left + 1,
        // } );
        setAll( allClicks.concat( "L" ) );
        setLeft( left + 1 );
    };

    const handleRightClick = () =>
    {
        // setClicks( {
        //     ...clicks,
        //     right: clicks.right + 1
        // } );
        setAll( allClicks.concat( "R" ) );
        setRight( right + 1 );
    };

    return (
        <div>
            {/* <Header course={course} />
            <Contents part1={course.parts}
             />
            <Total
                parts={course.parts}
               /> */}
            {/* <Hello  age ={age}  name ={name}/> */}

            {/* {counter}

               <button onClick={handleClick}> plus </button>
               <button onClick={()=>
                   setCounter(0)
               }> plus </button> */}

            {/* {left}
            <button onClick={handleLeftClick}> left </button>
            <button onClick={handleRightClick}> right </button>
            {right}
            <History allClicks={allClicks} /> */}

            <Display value={value} />
            <Button handleClick={() => setToValue( 2000 )} text='using subcomp' />
            <button onClick={() => setToValue( 1000 )}> thousand </button>
            <button onClick={() => setToValue( 100 )}> hundred </button>
            <button onClick={() => setToValue( 0 )}> reset </button>
            <button onClick={() => setToValue( value + 1 )}> increment </button>
            <button onClick={() => setToValue( value - 1 )}> decrement </button>
        </div>
    );
}

export default LessonTasks;
