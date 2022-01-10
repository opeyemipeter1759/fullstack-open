import React, {useState} from 'react'
import Contents from "./Contents";
import Header from "./Header";
import Total from "./Total";
import Hello from "./Hello";

function App() {
    const name = "peter";
    const age = 30;
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            }
            , {
                name: 'Using props to pass data',
                exercises: 14
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }
    const [counter, setCounter] = useState(0);

    // setInterval(
    //     () => setCounter(counter + 1), 1000
    // )

    console.log(counter);
    const handleClick = () => {
        setCounter(counter + 1 )
    }
    return (
        <div>
            {/* <Header course={course} />
            <Contents part1={course.parts}
             />
            <Total
                parts={course.parts}
               /> */}
               {/* <Hello  age ={age}  name ={name}/> */}

               {counter}

               <button onClick={handleClick}> plus </button>
               <button onClick={()=>
                   setCounter(0)
               }> plus </button>

        </div>
    );
}

export default App;
