import { useState, useEffect } from 'react'
import { getRemainingTimeStampMs } from './Utils'

const defaultRemainingTime = {
    seconds: '--',
    minutes: '--',
    hours: '--',
    days: '--'
}


const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
       const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs])
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeStampMs(countdown)) 
    }
    return (
        <div className='wrapper'>

        <section>
            <p className="number">{remainingTime.days}</p>
            <p><small>Days</small></p>
        </section>
        <span>|</span>

        <section>
            <p className="number">{remainingTime.hours}</p>
            <p><small>Hours</small></p>
        </section>
        <span>|</span>

        <section>
            <p className="number">{remainingTime.minutes}</p>
            <p><small>Minutes</small></p>
        </section>
        <span>|</span>

        <section>
            <p className="number">{remainingTime.seconds}</p>
            <p><small>Seconds</small></p>
        </section>
        </div>

    )
}

export default CountdownTimer;