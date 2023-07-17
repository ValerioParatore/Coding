

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
    const btnReset = document.getElementById('btns-div-res')
    btnReset.innerHTML = `
    <button
    
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModalRes"
  >
    Reset
  </button>
  <div
    class="modal fade"
    id="exampleModalRes"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Reset dei campi
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
        Confermi il reset dei campi?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Indietro
          </button>
          <button data-bs-dismiss="modal" onclick="resetFun()" type="button" class="btn btn-success">
            Confermo
          </button>
        </div>
      </div>
    </div>
  </div>
    `
    fetch(URL + idPro,{
        headers: {
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


const resetFun= function(e){
    namePro.value = ""
    descPro.value = ""
    brandPro.value = ""
    imgPro.value = ""
    pricePro.value = ""
}
