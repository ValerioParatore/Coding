const URL = "https://striveschool-api.herokuapp.com/api/product/"

const addressCont = new URLSearchParams(location.search)
const idPro = addressCont.get('id')
console.log(idPro)
fetch(URL + idPro,{
    headers: {
        'Content-Type': 'application/json',
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZDhhNTEyYjUwYzAwMTQ5ZTUwMWQiLCJpYXQiOjE2ODg3MjE1NzMsImV4cCI6MTY4OTkzMTE3M30.Q5BMa2GP73ZfhI46gtaYT-FtwgTWrPQMPALiVuu0G70"
}
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
        if(res.status === 404){
            throw new Error('Not found')
        }else if(res.status === 500){
            throw new Error('Internal Server Error')
        }else{
            throw new Error('Errore della chiamata API')
        }
    }
  })
  .then((detail) => {
    console.log('DETAIL', detail)
    const spinnerContainer = document.getElementById('spinner-container')
    spinnerContainer.classList.add('d-none')
    let newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-sm-6', 'text-center')
    newCol.innerHTML = `
          <div class="card">
              <img
                src="${detail.imageUrl}"
                class="card-img-top"
                alt="product image"
              />
              <div class="card-body">
                <h5 class="card-title">${detail.name}</h5>
                <p class="card-text">
                <b> Descrizione oggetto:</b> ${detail.description}
                </p>
                <p class="card-text">
                 <b>Marca:</b> ${detail.brand}
                </p>
                <p class="card-text">
                 <b>Prezzo:</b> ${detail.price}€
                </p>
                <div>
                <a href="./backOffice.html?id=${detail._id}" class="btn btn-warning">MODIFICA PRODOTTO</a>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ELIMINA PRODOTTO</button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Elimina Prodotto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Sicuro di voler eliminare il prodotto dallo Shop ? Una volta cliccato su conferma non si potrà tornare indietro
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Indietro</button>
        <button type="button" class="btn btn-primary">Conferma</button>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
        `
    const eventsRow = document.getElementById('events-row')
    eventsRow.appendChild(newCol)

    let deleteButton = document.querySelector('.btn-primary')
    deleteButton.addEventListener('click', function () {
      fetch(URL + idPro, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZDhhNTEyYjUwYzAwMTQ5ZTUwMWQiLCJpYXQiOjE2ODg3MjE1NzMsImV4cCI6MTY4OTkzMTE3M30.Q5BMa2GP73ZfhI46gtaYT-FtwgTWrPQMPALiVuu0G70"
}
      })
        .then((res) => {
          if (res.ok) {
            alert('PRODOTTO ELIMINATO!')
            location.assign('homePage.html')
          } else {
            if(res.status === 404){
                throw new Error('Not found')
            }else if(res.status === 500){
                throw new Error('Internal Server Error')
            }else{
                throw new Error('Errore della chiamata API')
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
  })
  .catch((err) => {
    console.log(err)
  })
