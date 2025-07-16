interface CounterProps {
    isRunning: boolean,
    onInputMinutes: (inputMinutes: string) => void,
    onInputSeconds: (inputSeconds: string) => void,
    minutes: string,
    seconds: string,
    setMiliseconds: (miliseconds: number) => void,
    miliseconds: number
}

export default function Counter({
    isRunning,
    onInputMinutes,
    onInputSeconds,
    minutes,
    seconds,
    setMiliseconds,
    miliseconds,
}: CounterProps) {
    const convertMiliseconds = (miliseconds: number, timeUnit: string) => {
        switch (timeUnit) {
            case 'minutes':
                return String(Math.floor(miliseconds / (1000 * 60)))

            case 'seconds':
                return String(Math.floor(miliseconds % (1000 * 60) / 1000))
        
            default:
                throw new Error("Invalied arg2 in convertMiliseconds");
                
        }
      }

    const showCounter = () => {
        setInterval(() => {
            const timeRemain = miliseconds - 1000
            setMiliseconds(timeRemain)
        }, 1000)
        return(
            <>
                <p>{convertMiliseconds(miliseconds, 'minutes')}:{convertMiliseconds(miliseconds, 'seconds')}</p>
            </>
        )
}

    const showTimerForm = () => (
        <>
            <form id='timer-form'>
                <input 
                    type='number'
                    min='0'
                    value={minutes}
                    onChange={e => onInputMinutes(e.target.value)}
                />
                <input
                    type='number'
                    min='0'
                    max='59'
                    value={seconds}
                    onChange={e => onInputSeconds(e.target.value)}
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