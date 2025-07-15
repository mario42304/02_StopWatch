//import { useState } from 'react'

interface ControllerProps {
    isRunning: boolean,
    onChangeTimer: (isRunning: boolean) => void
}

export default function Controller({isRunning, onChangeTimer}: ControllerProps) {
    

    const handleStart = () => {
        {onChangeTimer(true)}
    }

    const handleStop = () => {
        {onChangeTimer(false)}
    }

    const showStartButton = () => (
        <>
            <button
                type='submit'
                form='timer-form'
                onClick={() => handleStart()}>Start</button>
        </>
    )

    const showStopButton = () => (
        <>
            <button onClick={() => handleStop()}>Stop</button>
        </>
    )

    return (
        <>
            {isRunning ? showStopButton() : showStartButton()}
        </>
    )
}