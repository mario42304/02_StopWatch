import Counter from './Counter.tsx'
import Controller from './Controller.tsx'
import './App.css'
import { useState } from "react";

export default function App() {
  const [inputMinutes, setInputMinutes] = useState('')
  const [InputSeconds, setInputSeconds] = useState('')
  const [miliseconds, setMiliseconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  

  const handleInputMinutes = (inputMinutes: string) => {
    setInputMinutes(inputMinutes)
  }

  const handleInputSeconds = (inputSeconds: string) => {
    setInputSeconds(inputSeconds)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleSubmit = () => {
    if(!/^\d+$/.test(inputMinutes) || !/^\d+$/.test(InputSeconds)) {
      alert('Invalid inputs')
      setInputSeconds('')
      setInputMinutes('')
      return
    }

    setMiliseconds(((+inputMinutes * 60) + +InputSeconds) * 1000)

    setIsRunning(true)
  }

  return (
    <>
      <Counter
        isRunning={isRunning}
        onInputMinutes={handleInputMinutes}
        onInputSeconds={handleInputSeconds}
        minutes={inputMinutes}
        seconds={InputSeconds}
        setMiliseconds={setMiliseconds}
        miliseconds={miliseconds}
      />
      <Controller
        isRunning={isRunning}
        onSubmit={handleSubmit}
        onClickStop={handleStop}
      />
    </>
  )
}