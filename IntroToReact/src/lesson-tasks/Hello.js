import React from 'react'

const Hello = (props) => {
    const {age, name } = props
    const BornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p> hello {name}, you are {age} years old.
            </p>
            <p> so i am guessing your birth year is {BornYear()} </p>
        </div>
    )
}

export default Hello

