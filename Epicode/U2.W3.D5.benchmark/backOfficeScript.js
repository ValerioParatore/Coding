

const namePro = document.getElementById('name-pro')
const descPro = document.getElementById('des-pro')
const brandPro = document.getElementById('brand-pro')
const imgPro = document.getElementById('img-pro')
const pricePro = document.getElementById('price-pro')
const divBtns = document.getElementById('btns-div')
let eventForm = document.getElementById('add-pro')
const URL = "https://striveschool-api.herokuapp.com/api/product/"
const addressCont = new URLSearchParams(location.search)
const idPro = addressCont.get('id')
console.log(idPro);

if (idPro) {
    document.querySelector('.btn-primary').innerText = 'Modifica Prodotto'
    document.querySelector('h1').innerText = 'Epi-Shop - Modifica Prodotto'
    const btnReset = document.createElement('button')
    btnReset.classList.add('btn' , 'btn-danger')
    btnReset.innerText = 'Reset'
    btnReset.addEventListener('click', function(e){
        e.preventDefault()
        namePro.value = ""
        descPro.value = ""
        brandPro.value = ""
        imgPro.value = ""
        pricePro.value = ""
    })
    divBtns.appendChild(btnReset)

    fetch(URL + idPro,{
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZDhhNTEyYjUwYzAwMTQ5ZTUwMWQiLCJpYXQiOjE2ODg3MjE1NzMsImV4cCI6MTY4OTkzMTE3M30.Q5BMa2GP73ZfhI46gtaYT-FtwgTWrPQMPALiVuu0G70"
}
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nel recupero dei dettagli dell'Prodotto")
        }
      })
      .then((detail) => {
        console.log('DETAIL', detail)

        namePro.value = detail.name
        descPro.value = detail.description
        brandPro.value = detail.brand
        imgPro.value = detail.imageUrl
        pricePro.value = detail.price
      })
      .catch((err) => console.log(err))
  }
  

eventForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newPro = {
        name: namePro.value ,
        description : descPro.value ,
        brand : brandPro.value ,
        imageUrl : imgPro.value ,
        price : pricePro.value,
    }
    console.log(newPro)

    let urlToUse
    if (idPro) {
      urlToUse = URL + '/' + idPro
    } else {
      urlToUse = URL
    }
    let methodToUse
    if (idPro) {
      methodToUse = 'PUT'
    } else {
      methodToUse = 'POST'
    }
  
    fetch(urlToUse, {
      method: methodToUse, 
      body: JSON.stringify(newPro), 
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZDhhNTEyYjUwYzAwMTQ5ZTUwMWQiLCJpYXQiOjE2ODg3MjE1NzMsImV4cCI6MTY4OTkzMTE3M30.Q5BMa2GP73ZfhI46gtaYT-FtwgTWrPQMPALiVuu0G70",
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {

          alert('PRODOTTO SALVATO CORRETTAMENTE!')
          namePro.value = ""
          descPro.value = ""
          brandPro.value = ""
          imgPro.value = ""
          pricePro.value = ""
          location.assign('homePage.html')
        } else {
          throw new Error("Errore nel salvataggio del Prodotto")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })