const time = document.querySelector('h2')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')


let seconds = 0
let interval;

let isStart = true
const startTimer = () => {
    if(isStart){
        isStart = false
    interval = setInterval(() => {
        seconds++
        let sec = Math.floor(seconds % 60)
        if(sec < 10) sec = "0"+sec
        let min = Math.floor(seconds / 60)
        if(min < 10) min = "0"+min
        let hours = Math.floor(seconds  / 3600)
        if(hours < 10) hours = "0"+hours
        time.innerHTML = `${hours}:${min}:${sec}`
    },1000)
}

    
    
}

startBtn.addEventListener('click',startTimer)

const StopTimer = () => {
    if(isStart == false){
        isStart =true
        clearInterval(interval)
    }
}

stopBtn.addEventListener('click',StopTimer)

const ResetTimer = () => {
    if(isStart== false || isStart == true){
        seconds = 0
        clearInterval(interval)
        time.innerHTML = "00:00:00"
        isStart = true
    }
  
}

resetBtn.addEventListener('click',ResetTimer)