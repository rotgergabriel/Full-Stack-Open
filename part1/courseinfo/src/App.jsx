const Header = (props) => {
  const name = props.course.name
  // console.log("Course", props.course)
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({parts}) => {
  // console.log("Content", props)
  return (
    <>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </>
  )
}

const Total = ({parts}) => {
  // console.log("Total", props)
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

const App = () => {
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
  
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App