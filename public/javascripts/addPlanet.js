const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    
    const formDataJson = Object.fromEntries(formData)
    
    const url = 'https://solar-system2-api.herokuapp.com/planet'
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formDataJson),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
})
