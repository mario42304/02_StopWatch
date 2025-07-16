interface ControllerProps {
    isRunning: boolean,
    onSubmit: () => void,
    onClickStop: () => void
}

export default function Controller({
    isRunning,
    onSubmit,
    onClickStop
}: ControllerProps) {

    const showStartButton = () => (
        <>
            <button
                type='submit'
                form='timer-form'
                onClick={() => onSubmit()}>Start</button>
        </>
    )

    const showStopButton = () => (
        <>
            <button onClick={() => onClickStop()}>Stop</button>
        </>
    )

    return (
        <>
            {isRunning ? showStopButton() : showStartButton()}
        </>
    )
}