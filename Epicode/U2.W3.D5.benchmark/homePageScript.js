const getPro = function(){
    const URL = 'https://striveschool-api.herokuapp.com/api/product/'
    fetch(URL,{
        headers: {
        
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZDhhNTEyYjUwYzAwMTQ5ZTUwMWQiLCJpYXQiOjE2ODg3MjE1NzMsImV4cCI6MTY4OTkzMTE3M30.Q5BMa2GP73ZfhI46gtaYT-FtwgTWrPQMPALiVuu0G70"
}
    })
    .then((res)=>{
        console.log(res);
        if(res.ok){
           return res.json()
        }else{
            throw new Error('Errore nella chiamata API')
        }
    })
    .then((events)=>{
        console.log(events);
        let divCards = document.getElementById('div-cards')
        events.forEach(el => {
            let newCol = document.createElement('div')
            newCol.classList.add('col','col-12','col-sm-6','col-md-3')
            newCol.innerHTML = `
            <div class="card">
             <img
              src="${el.imageUrl}"
              class="card-img-top"
              alt="..."
             />
              <div class="card-body">
               <h5 class="card-title">${el.name}</h5>
               <p class="card-text fw-bold">
               ${el.price} euro
               </p>
               <a href="./detail.html?id=${el._id}" class="btn btn-primary">Scopri di più</a>
              </div>
            </div>
            `
            divCards.appendChild(newCol)
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}
getPro()