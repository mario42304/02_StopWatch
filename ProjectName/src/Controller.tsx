import { useState } from 'react'

export default function Controller() {
    const[isRunning, setIsRunning] = useState(false)

    const handleStart = () => {
        {setIsRunning(true)}
    }

    const handleStop = () => {
        {setIsRunning(false)}
    }

    const showStartButton = () => {
        <>
            <button onClick={() => handleStart()}>Start</button>
        </>
    }

    const showStopButton = () => {
        <>
            <button onClick={() => {handleStop()}}>Stop</button>
        </>
    }

    return (
        <>
            {isRunning ? showStopButton() : showStartButton()}
        </>
    )
}