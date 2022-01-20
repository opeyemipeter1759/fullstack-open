import React from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

const Contents = ({part1, exercises1,part2, exercises2, part3,exercises3}) => {
    return (
      <div>
            <Part1 exercises1={exercises1}
                part1={part1} />
            <Part2
                exercises2={exercises2}
                part2={part2} />
            <Part3
                exercises3={exercises3}
                part3={part3} />
      </div>
    );
}

export default Contents