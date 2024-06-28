import { useState } from 'react'
import './Statistic.css'

const Title = ({props}) => {
  return(
    <>
      <h1>{props}</h1>
    </>
  )
}

const Buttons = ({onClick, value}) => {
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  )
}

const StatisticLine = ({ props, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="table--td">{value}</td>
            <td className="table--td">{props}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Statistics = ({
    good, 
    neutral, 
    bad, 
    all, 
    average, 
    positive
  }) => {

  const feedBackText = 'No feedback given'

  if(all === 0) {
    return(
      <h3>{feedBackText}</h3>
    )
  }

  return (
    <>
      <StatisticLine props={good} value={'Good'} />
      <StatisticLine props={neutral} value={'Neutral'} />
      <StatisticLine props={bad} value={'Bad'} />
      <StatisticLine props={all} value={'All'} />
      <StatisticLine props={average} value={'Average'} />
      <StatisticLine props={positive} value={'Positive'} />
    </>
  )
}

const App = () => {
  //App data management
  const TitleProps = {
    title: 'Give feedback',
    secondTitle: 'Statistics'
  }
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
      setGood(good + 1)
  }

  const handleNeutralClicks = () => {
      setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
      setBad(bad + 1)
  }

  const all = good + neutral + bad
  const average = ((good + neutral + bad) / 3).toFixed(1)
  const positive = ((good * 100 ) / all).toFixed(1)

  return (
    <>
      <Title props={TitleProps.title} />
      <Buttons onClick={handleGoodClicks} value={'Good'}/>
      <Buttons onClick={handleNeutralClicks} value={'Neutral'}/>
      <Buttons onClick={handleBadClicks} value={'Bad'}/>
      <br />
      <Title props={TitleProps.secondTitle} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  )
}

export default App