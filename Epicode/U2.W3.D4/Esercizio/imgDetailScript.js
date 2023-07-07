const url = 'https://api.pexels.com/v1/photos/'
const currentAddress = new URLSearchParams(location.search)
const elId = currentAddress.get('id')
console.log(elId)
console.log(url + elId)
fetch(url + elId,{
    headers:{
        Authorization : "AzfAwqAwh8AnI7irolpnlzUgRUaXyP1Nhw8oTSXzX2A1rgMcnubxpmCq"
    }
})
.then((res)=>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error('Errore di caricamento')
    }
})
.then((data)=>{
    console.log(data)
})