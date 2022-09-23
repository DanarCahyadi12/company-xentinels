const startBtn = document.querySelector('.startPause')
const displayerTime = document.querySelector('h2')
const resetBtn = document.querySelector('.resetBtn')
const containerProgress = document.querySelector('.conatiner-progress')
const progressed = document.querySelector('.progress')
const secondEl = document.querySelector('.inputSec')
const minEl = document.querySelector('.inputMin')
const hourEl = document.querySelector('.inputHour')

let interval;
let bool = true
let secondValue,minuteValue,hourValue
let total
const StartTimer = () => {
    secondValue = parseInt(secondEl.value)
    minuteValue = parseInt(minEl.value) * 60
    hourValue = parseInt(hourEl.value )* 3600

        total = hourValue+minuteValue+secondValue
    let totals = total

    if(secondValue == 0 && minuteValue == 0 && hourValue == 0){
        secondValue =0 
        minuteValue =0 
        hourValue =0 
    }else if(bool && secondValue > 0 || minuteValue > 0 || hourValue > 0){
        
        interval= setInterval(() => {
            total --
            let currentHours = Math.floor(total / 3600)
            let currentMinutes = Math.floor(total  % 3600 / 60)
        let currentSecond = Math.floor(total  % 3600 % 60)
        if(currentHours < 10) currentHours = `0${currentHours}`
        if(currentMinutes< 10) currentMinutes= `0${currentMinutes}`
        if(currentSecond < 10) currentSecond = `0${currentSecond}`
        displayerTime.innerHTML = `${currentHours}:${currentMinutes}:${currentSecond}`
        let calc = Math.floor((total /totals) * 100)
        progressed.style.width = calc+"%"
        progressed.style.transition = '190ms ease-in-out'
        if(total === 0){
            total=0
            clearInterval(interval)
            alert('TIMES UP!')
            bool = true
        }
        
        },1000)
    }
}

startBtn.addEventListener('click',e => {
    if(bool) {
        StartTimer()
        bool = false
    }
})

const ResetTimer = () => {
    total = 0
    secondValue = 0
    minuteValue = 0
    hourValue = 0
    clearInterval(interval)
    displayerTime.innerHTML = "00:00:00"
    bool = true
    progressed.style.width = "100%"
    progressed.style.transition = '190ms ease-in-out'
}

resetBtn.addEventListener('click', () => {
    ResetTimer()
})