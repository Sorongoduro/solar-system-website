const solarSystem = document.querySelector('.solar-system')
const sun = document.querySelector('.sun')
const mercury = document.querySelector('.mercury')
const venus = document.querySelector('.venus')
const earth = document.querySelector('.earth')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturn = document.querySelector('.saturn')
const uranus = document.querySelector('.uranus')
const neptune = document.querySelector('.neptune')
const pluto = document.querySelector('.pluto')
const desc = document.querySelector('.info')
const order = document.querySelector('.planet-order')
const disorder = document.querySelector('.planet-disorder')
const lineup = document.querySelector('.planet-lineup')

const planetName = document.querySelector('.planet-name')
const planetType = document.querySelector('.planet-type')
const planetVel = document.querySelector('.planet-velrot')
const planetDiam = document.querySelector('.planet-diam')
const planetTemp = document.querySelector('.planet-temp')
const planetMass = document.querySelector('.planet-mass')
const planetDensity = document.querySelector('.planet-density')
const planetDesc = document.querySelector('.planet-desc')

const url = 'https://solar-system2-api.herokuapp.com/planets'


sun.addEventListener('click', () => {

    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')

    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[0].name
            planetType.textContent = `${data[0].type}`
            planetVel.textContent = `Velocidad: ${data[0].rotvel}`
            planetDiam.textContent = `Diametro: ${data[0].diam}`
            planetTemp.textContent = `Temperatura de superficie: ${data[0].temp}`
            planetMass.textContent = `Masa: ${data[0].mass}`
            planetDensity.textContent = `Densidad: ${data[0].density}`
            planetDesc.textContent = `Descripcion: ${data[0].description}`
        })

    desc.classList.remove('hide')
})

mercury.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[1].name
            planetType.textContent = `${data[1].type}`
            planetVel.textContent = `Velocidad: ${data[1].rotvel}`
            planetDiam.textContent = `Diametro: ${data[1].diam}`
            planetTemp.textContent = `Temperatura media: ${data[1].temp}`
            planetMass.textContent = `Masa: ${data[1].mass}`
            planetDensity.textContent = `Densidad: ${data[1].density}`
            planetDesc.textContent = `Descripcion: ${data[1].description}`
        })
    desc.classList.remove('hide')
})

venus.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[2].name
            planetType.textContent = `${data[2].type}`
            planetVel.textContent = `Velocidad: ${data[2].rotvel}`
            planetDiam.textContent = `Diametro: ${data[2].diam}`
            planetTemp.textContent = `Temperatura media: ${data[2].temp}`
            planetMass.textContent = `Masa: ${data[2].mass}`
            planetDensity.textContent = `Densidad: ${data[2].density}`
            planetDesc.textContent = `Descripcion: ${data[2].description}`
        })
    desc.classList.remove('hide')
})

earth.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[3].name
            planetType.textContent = `${data[3].type}`
            planetVel.textContent = `Velocidad: ${data[3].rotvel}`
            planetDiam.textContent = `Diametro: ${data[3].diam}`
            planetTemp.textContent = `Temperatura media: ${data[3].temp}`
            planetMass.textContent = `Masa: ${data[3].mass}`
            planetDensity.textContent = `Densidad: ${data[3].density}`
            planetDesc.textContent = `Descripcion: ${data[3].description}`
        })
    desc.classList.remove('hide')
})

mars.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[4].name
            planetType.textContent = `${data[4].type}`
            planetVel.textContent = `Velocidad: ${data[4].rotvel}`
            planetDiam.textContent = `Diametro: ${data[4].diam}`
            planetTemp.textContent = `Temperatura media: ${data[4].temp}`
            planetMass.textContent = `Masa: ${data[4].mass}`
            planetDensity.textContent = `Densidad: ${data[4].density}`
            planetDesc.textContent = `Descripcion: ${data[4].description}`
        })
    desc.classList.remove('hide')
})

jupiter.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[5].name
            planetType.textContent = `${data[5].type}`
            planetVel.textContent = `Velocidad: ${data[5].rotvel}`
            planetDiam.textContent = `Diametro: ${data[5].diam}`
            planetTemp.textContent = `Temperatura media: ${data[5].temp}`
            planetMass.textContent = `Masa: ${data[5].mass}`
            planetDensity.textContent = `Densidad: ${data[5].density}`
            planetDesc.textContent = `Descripcion: ${data[5].description}`
        })
    desc.classList.remove('hide')
})

saturn.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[6].name
            planetType.textContent = `${data[6].type}`
            planetVel.textContent = `Velocidad: ${data[6].rotvel}`
            planetDiam.textContent = `Diametro: ${data[6].diam}`
            planetTemp.textContent = `Temperatura media: ${data[6].temp}`
            planetMass.textContent = `Masa: ${data[6].mass}`
            planetDensity.textContent = `Densidad: ${data[6].density}`
            planetDesc.textContent = `Descripcion: ${data[6].description}`
        })
    desc.classList.remove('hide')
})

uranus.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[7].name
            planetType.textContent = `${data[7].type}`
            planetVel.textContent = `Velocidad: ${data[7].rotvel}`
            planetDiam.textContent = `Diametro: ${data[7].diam}`
            planetTemp.textContent = `Temperatura media: ${data[7].temp}`
            planetMass.textContent = `Masa: ${data[7].mass}`
            planetDensity.textContent = `Densidad: ${data[7].density}`
            planetDesc.textContent = `Descripcion: ${data[7].description}`
        })
    desc.classList.remove('hide')
})

neptune.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[8].name
            planetType.textContent = `${data[8].type}`
            planetVel.textContent = `Velocidad: ${data[8].rotvel}`
            planetDiam.textContent = `Diametro: ${data[8].diam}`
            planetTemp.textContent = `Temperatura media: ${data[8].temp}`
            planetMass.textContent = `Masa: ${data[8].mass}`
            planetDensity.textContent = `Densidad: ${data[8].density}`
            planetDesc.textContent = `Descripcion: ${data[8].description}`
        })
    desc.classList.remove('hide')
})

pluto.addEventListener('click', () => {
    
    desc.classList.toggle('active')
    desc.classList.toggle('desc-in')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[9].name
            planetType.textContent = `${data[9].type}`
            planetVel.textContent = `Velocidad: ${data[9].rotvel}`
            planetDiam.textContent = `Diametro: ${data[9].diam}`
            planetTemp.textContent = `Temperatura media: ${data[9].temp}`
            planetMass.textContent = `Masa: ${data[9].mass}`
            planetDensity.textContent = `Densidad: ${data[9].density}`
            planetDesc.textContent = `Descripcion: ${data[9].description}`
        })
    desc.classList.remove('hide')
})


order.addEventListener('click', () => {
    mercury.style.animationPlayState = "paused";
    venus.style.animationPlayState = "paused";
    earth.style.animationPlayState = "paused";
    mars.style.animationPlayState = "paused";
    jupiter.style.animationPlayState = "paused";
    uranus.style.animationPlayState = "paused";
    saturn.style.animationPlayState = "paused";
    neptune.style.animationPlayState = "paused";
    pluto.style.animationPlayState = "paused";
})

disorder.addEventListener('click', () => {
    mercury.style.animationPlayState = "running";
    venus.style.animationPlayState = "running";
    earth.style.animationPlayState = "running";
    mars.style.animationPlayState = "running";
    jupiter.style.animationPlayState = "running";
    uranus.style.animationPlayState = "running";
    saturn.style.animationPlayState = "running";
    neptune.style.animationPlayState = "running";
    pluto.style.animationPlayState = "running";
})

lineup.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        mercury.classList.toggle('return-mercury-mobile')
        venus.classList.toggle('return-venus-mobile')
        earth.classList.toggle('return-earth-mobile')
        mars.classList.toggle('return-mars-mobile')
        jupiter.classList.toggle('return-jupiter-mobile')
        saturn.classList.toggle('return-saturn-mobile')
        uranus.classList.toggle('return-uranus-mobile')
        neptune.classList.toggle('return-neptune-mobile')
        pluto.classList.toggle('return-pluto-mobile')
    } else {
        mercury.classList.toggle('return-mercury')
        venus.classList.toggle('return-venus')
        earth.classList.toggle('return-earth')
        mars.classList.toggle('return-mars')
        jupiter.classList.toggle('return-jupiter')
        saturn.classList.toggle('return-saturn')
        uranus.classList.toggle('return-uranus')
        neptune.classList.toggle('return-neptune')
        pluto.classList.toggle('return-pluto')
    }
})