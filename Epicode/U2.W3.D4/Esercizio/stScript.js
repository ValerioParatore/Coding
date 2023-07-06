//bottone 1
let btnImg1 = document.querySelector('.btn-primary')
btnImg1.addEventListener('click', function(e){
    fetch('https://api.pexels.com/v1/search?query=dragons',{
    headers:{
        Authorization : "AzfAwqAwh8AnI7irolpnlzUgRUaXyP1Nhw8oTSXzX2A1rgMcnubxpmCq"
    }
})
.then((res)=>{
    console.log(res)
    if(res.ok){
        return res.json()
    }else{
        throw new Error('Errore di caricamento')
    }
})
.then((data)=>{
    console.log(data);
    let mainCont = document.getElementById('main-container')
    mainCont.innerHTML = ''
    data.photos.forEach(el => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'md-4')
        newCol.innerHTML = `
        <div class="card mb-4 shadow-sm">
         <img src="${el.src.medium}" class="card-img-top" />
          <div class="card-body">
          <a href="./imgDetail.html?id=${el.id}"> <h5 class="card-title">${el.alt}</a>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  onclick="deleteMe(this)"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${el.id}</small>
            </div>
          </div>
        </div>
        `
        mainCont.appendChild(newCol)
    });
    
})
})
//Bottone 2
let btnImg2 = document.querySelector('.btn-secondary')
btnImg2.addEventListener('click', function(e){
    fetch('https://api.pexels.com/v1/search?query=swords',{
    headers:{
        Authorization : "AzfAwqAwh8AnI7irolpnlzUgRUaXyP1Nhw8oTSXzX2A1rgMcnubxpmCq"
    }
})
.then((res)=>{
    console.log(res)
    if(res.ok){
        return res.json()
    }else{
        throw new Error('Errore di caricamento')
    }
})
.then((data)=>{
    console.log(data);
    let mainCont = document.getElementById('main-container')
    mainCont.innerHTML = ''
    data.photos.forEach(el => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'md-4')
        newCol.innerHTML = `
        <div class="card mb-4 shadow-sm">
         <img src="${el.src.medium}" class="card-img-top" />
          <div class="card-body">
          <a href="./imgDetail.html?id=${el.id}"> <h5 class="card-title">${el.alt}</a>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  onclick="deleteMe(this)"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${el.id}</small>
            </div>
          </div>
        </div>
        `
        mainCont.appendChild(newCol)
    });
    
})
})
const deleteMe = function(clickedButton){
    clickedButton.parentElement.parentElement.parentElement.parentElement.remove()
}