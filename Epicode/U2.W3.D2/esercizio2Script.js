const spanCounter = document.getElementById('counter')
let counterEl = sessionStorage.getItem('counter-memory')

setInterval(()=>{counterEl++,sessionStorage.setItem('counter-memory', counterEl),spanCounter.textContent = sessionStorage.getItem('counter-memory')}, 1000)

