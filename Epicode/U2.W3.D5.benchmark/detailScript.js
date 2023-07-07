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
      throw new Error("Errore nel recupero dei dettagli dell'evento")
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
                <button type="button" class="btn btn-danger">ELIMINA PRODOTTO</button>
                </div>
              </div>
            </div>
        `
    const eventsRow = document.getElementById('events-row')
    eventsRow.appendChild(newCol)

    let deleteButton = document.querySelector('.btn-danger')
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
            throw new Error("Problema nell'eliminazione dell'evento")
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
