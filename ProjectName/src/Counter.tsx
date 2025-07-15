import { useState } from "react";

interface CounterProps {
    isRunning: boolean
}

export default function Counter({isRunning}: CounterProps) {
    const[minutes, setMinutes] = useState(0)
    const[seconds, setSeconds] = useState(0)
    const[miliseconds, setMiliseconds] = useState(0)

    

    const showCounter = () => (
        <>
            <p>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
        </>
    )

    const showTimerForm = () => (
        <>
            <form id='timer-form'>
                <input 
                    type='text'
                    value={minutes}
                    onChange={e => setMinutes(Number(e.target.value))}
                />
                <input 
                    type='text'
                    value={seconds}
                    onChange={e => setSeconds(Number(e.target.value))}
                />
            </form>
        </>
    )

    return (
        <>
            {isRunning ? showCounter() : showTimerForm()}
        </>
    )
}