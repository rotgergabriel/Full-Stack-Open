import { useState } from 'react'
import './App.css'

// Header 
const Header = ({ value }) => {
  return (
    <>
      <h1>{value}</h1>
    </>
  )
}

// Anecdotes 
const Anecdotes = ({ anecdotes }) => {
  return (
    <>
      <p className='anecdote-content'>{anecdotes}</p>
    </>
  )
}

// Points 
const Points = ({ pointsTextVote }) => {
  return (
    <>
      <p>{pointsTextVote}</p>
    </>
  )
}

// Button 
const Button = ({ handleClick, value }) => {
  return (
    <>
      <button className='noSelectButton' onClick={handleClick}>{value}</button>
    </>
  )
}

// AnecdoteWithMostVotes 
const AnecdoteWithMostVotes = ({ noExistingVotes, anecdotes, title, points }) => {
  const moreVoted = points.indexOf(Math.max(...points));
  const noVotes = points.length === 0 || points.every(point => point === 0);

  if (!noVotes) {
    return (
      <>
        <h2>{title}</h2>
        <p>{anecdotes[moreVoted]}</p>
      </>
    );
  } else {
    return (
      <>
        <h2>{title}</h2>
        <p>{noExistingVotes}</p>
      </>
    );
  }
}

// App 
const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const textContent = {
    title: 'Anecdote of the day',
    buttonNext: 'Next anecdote',
    buttonVote: 'Vote',
    pointsTextVote: `Has ${points[selected]} votes`,
    anecdoteWithMostVotesTitle: 'Anecdote with most votes',
    noExistingVotes: 'No existing votes'
  }

  const handlePoints = () => {
    const _points = [...points]
    _points[selected] += 1
    setPoints(_points)
  }

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <>
      <Header value={textContent.title} />
      <Anecdotes anecdotes={anecdotes[selected]} />
      <Points pointsTextVote={textContent.pointsTextVote} />
      <Button handleClick={handlePoints} value={textContent.buttonVote} />
      <Button handleClick={handleAnecdote} value={textContent.buttonNext} />
      <AnecdoteWithMostVotes
        noExistingVotes={textContent.noExistingVotes}
        anecdotes={anecdotes}
        title={textContent.anecdoteWithMostVotesTitle}
        points={points}
      />
    </>
  )
}

// Array de anécdotas
export const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

export default App
