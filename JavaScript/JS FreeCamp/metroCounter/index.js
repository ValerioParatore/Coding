//document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")

let count = 0

let saveEl = document.getElementById("save-el")


function increment() { 
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
     saveCount = count + "-"
     saveEl.innerText +=  saveCount
    console.log(count)
}








