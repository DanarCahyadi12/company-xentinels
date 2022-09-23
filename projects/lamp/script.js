const lampEl = document.querySelectorAll('img')
const btnLamp = document.querySelectorAll('button')


const TurnOff = param1 => {
    lampEl[param1].setAttribute('src','lamp off.jpg')
    lampEl[param1].classList.replace('on','off')
    btnLamp[param1].innerText = 'Turn on'

}

const TurnOn = param1 => {
    lampEl[param1].setAttribute('src','lamp on.jpg')
    lampEl[param1].classList.replace('off','on')
    btnLamp[param1].innerText = 'Turn off'
}

const isOffOrOn = param => {
    lampEl[param].classList.contains('on') ? TurnOff(param) : TurnOn(param)
}

btnLamp.forEach((val,i) => {
    lampEl[i].classList.add('on')
    val.addEventListener('click', ()=> {
        isOffOrOn(i)
    })


})