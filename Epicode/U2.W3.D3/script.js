

const getBooks = function(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((res) => {
        if(res.ok){
            return res.json()
        }else{
            if(res.status === 404){
                throw new Error('Not found')
            }else if(res.status === 500){
                throw new Error('Internal Server Error')
            }else{
                throw new Error('Errore della chiamata API')
            }
        }
    })
    .then((data)=>{
        console.log(data)
        let spinnerContainer = document.getElementById('spinner-container')
        spinnerContainer.classList.add('d-none')
        let libreria = document.getElementById('libreria')
        data.forEach((book, i) => {
            let newBookCard = document.createElement('div')
            newBookCard.classList.add('col', 'col-3')
            newBookCard.innerHTML =` 
             <div class="card">
              <img src="${book.img}" class="card-img-top" alt="...">
               <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text d-inline">${book.price} Euro</p>
                <button onclick="deleteMe(this)" class="btn btn-danger d-inline ms-3">
                <i class="bi bi-trash3-fill"></i>
                </button>
               </div>
             </div>         
            `
            libreria.appendChild(newBookCard)

        });
    })
    .catch((err) => {
        console.log(err)
    });
}
getBooks()

const deleteMe = function(clickedButton){
    clickedButton.parentElement.parentElement.remove()
}
