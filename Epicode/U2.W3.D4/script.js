const getEventData = function(){
    const URL = 'https://striveschool-api.herokuapp.com/api/agenda'
    fetch(URL)
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
              src="pubblico-eccitato-che-guarda-i-fuochi-d-artificio-di-coriandoli-e-si-diverte-al-festival-musicale-di-notte-spazio-di-copia.jpg"
              class="card-img-top"
              alt="..."
             />
              <div class="card-body">
               <h5 class="card-title">${el.name}</h5>
               <p class="card-text">
               ${el.description}
               </p>
               <p class="card-text fw-bold">
               ${el.price} euro
               </p>
               <a href="./detail.html?=${el._id}" class="btn btn-primary">Scopri di più</a>
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
getEventData()