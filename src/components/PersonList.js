import React from 'react'

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

    const mappedPerson = person.map(person => <h1>i am {person.name} i am {person.age} years old i know {person.skill}</h1>)

  return (

    <div>{mappedPerson}</div>

  )


}

export default PersonList