import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part exercise_name={props.parts[0].exercise_name} num_of_exercises={props.parts[0].num_of_exercises} />
      <Part exercise_name={props.parts[1].exercise_name} num_of_exercises={props.parts[1].num_of_exercises} />
      <Part exercise_name={props.parts[2].exercise_name} num_of_exercises={props.parts[2].num_of_exercises} />
    </div>
  )
}

const Part = (props) => (
  <p>{props.exercise_name} {props.num_of_exercises}</p>
)

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].num_of_exercises + props.parts[1].num_of_exercises + props.parts[2].num_of_exercises}</p>
  )
}

const App = () => {
  const course = {
    course_name: 'Half Stack application development',
    parts: [
      {
        exercise_name: 'Fundamentals of React',
        num_of_exercises: 10
      },
      {
        exercise_name: 'Using props to pass data',
        num_of_exercises: 7
      },
      {
        exercise_name: 'State of a component',
        num_of_exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.course_name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App