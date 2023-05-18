const App = () => {
    // const course = 'Half Stack application development';
    // const part1 = 'Fundamentals of React';
    // const exercises1 = 10;
    // const part2 = 'Using props to pass data';
    // const exercises2 = 7;
    // const part3 = 'State of a component';
    // const exercises3 = 14;

    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    

    const Header = ({course}) => {
        return (
            <div>
                <h1>{course.name} </h1>
            </div>
        );
    };

    const Part1 = ({course}) => {
        return (
            <div>
                <p>
                    {course.parts[0].name} {course.parts[0].exercises}
                </p>
            </div>
        );
    };

    const Part2 = ({course}) => {
        return (
            <div>
                <p>
                    {course.parts[1].name} {course.parts[1].exercises}
                </p>
            </div>
        );
    };

    const Part3 = ({course}) => {
        return (
            <div>
                <p>
                    {course.parts[2].name} {course.parts[2].exercises}
                </p>
            </div>
        );
    };

    const Content = ( { course} ) => {
        return (
            <div>
                <Part1 course={course} />
                <Part2 course={course} />
                <Part3 course={course} />
            </div>
        );
    };
    return (
        <>
            <Header course={course} />
            <Content course={course}  />
            <p>
                Number of exercises{' '}
                {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            </p>
        </>
    );
};

export default App;
