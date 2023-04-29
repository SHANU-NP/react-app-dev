import React from 'react'
import Person from './Person'

function PersonList() {

    const person = [
        {
            id : 1,
            name : "shanu",
            age : 24,
            skill : "java"
        },
        {
            id : 2,
            name : "nithin",
            age : 24,
            skill : "management"
        },
        {
            id : 3,
            name : "nikhil",
            age : 25,
            skill : "c"

        }
    ]

    const mappedPerson = person.map(person => <Person person={person}/>)

  return (

    <div>{mappedPerson}</div>

  )


}

export default PersonList