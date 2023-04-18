import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.7/+esm'
export function getRemainingTimeStampMs(timeStampMs) {
    const timeStampDay = dayjs(timeStampMs)
    const nowDay = dayjs()
    return {
        seconds: getRemainingSeconds(nowDay, timeStampDay),
        minutes: getRemainingMinutes(nowDay, timeStampDay),
        hours: getRemainingHours(nowDay, timeStampDay),
        days: getRemainingDays(nowDay, timeStampDay)
    }
}

function getRemainingSeconds(nowDay, timeStampDay) {
    const seconds = timeStampDay.diff(nowDay, 'seconds') % 60
    return padWithZeros(seconds,2)
}

function getRemainingMinutes(nowDay, timeStampDay) {
    const minutes = timeStampDay.diff(nowDay, 'minutes') % 60
    return padWithZeros(minutes,2)
}

function getRemainingHours(nowDay, timeStampDay) {
    const hours = timeStampDay.diff(nowDay, 'hours') % 24
    return padWithZeros(hours,2)
}

function getRemainingDays(nowDay, timeStampDay) {
    const days = timeStampDay.diff(nowDay, 'days') 
    return days.toString()
}

function padWithZeros(number, minLength) {
    const numberString = number.toString()
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}