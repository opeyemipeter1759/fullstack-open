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
    return (
        <div>
            {/* <Header course={course} />
            <Contents part1={course.parts}
             />
            <Total
                parts={course.parts}
               /> */}
               <Hello  age ={age}  name ={name}/>
        </div>
    );
}

export default App;
