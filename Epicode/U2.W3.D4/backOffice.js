let eventForm = document.getElementById('event-form')
eventForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('raccolgo i dati del form')
    const nameEv = document.getElementById('name-event')
    const desEv = document.getElementById('des-event')
    const priceEv = document.getElementById('price-event')
    const dateEv = document.getElementById('date-event')

    const newEvent = {
        name : nameEv.value,
        description: desEv.value,
        price: priceEv.value,
        date: dateEv.value
    }
    console.log(newEvent);
    const URL = 'https://striveschool-api.herokuapp.com/api/agenda'
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((res)=>{
        if(res.ok){
            alert('Evento Salvato')
            nameEv.value = ''
            desEv.value = ''
            priceEv.value = ''
            dateEv.value = ''
        }else{
            throw new Error('Errore nel salvataggio dell evento')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})