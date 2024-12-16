import './App.css'
import Description from './components/Description/Description';
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback';
import Notification from "./components/Notification/Notification"
import { useEffect, useState } from 'react';

function App() {

  const [feedbacks, setFeedback] = useState(() => {
    const localFeedbacks = window.localStorage.getItem("feedbacks")

    if (localFeedbacks !== null) {
      return JSON.parse(localFeedbacks)
    }
    return { good: 0, neutral: 0, bad: 0 }
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const PositiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100)


  const updateFeedback = (feedbackType) => {
  
    setFeedback({
      ...feedbacks,
    [feedbackType]: feedbacks [feedbackType] + 1
    })
    
    
  }

  const clearFeedback  = ( ) => {
    setFeedback({ ...feedbacks, neutral: 0, good: 0, bad: 0 })
  }

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
  }, [feedbacks])

  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        totalFeedback={totalFeedback}
        clear={clearFeedback}
      />
      <>{totalFeedback > 0
        ? <Feedback
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        totalFeedback={totalFeedback}
        positive={PositiveFeedback}
      />
        : <Notification
        totalFeedback={ totalFeedback} /> }</>
    </>
  )
}

export default App
