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
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[0].name
            planetType.textContent = `Tipo: ${data[0].type}`
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
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[1].name
            planetType.textContent = data[1].type
            planetVel.textContent = data[1].rotvel
            planetDiam.textContent = data[1].diam
            planetTemp.textContent = data[1].temp
            planetMass.textContent = data[1].mass
            planetDensity.textContent = data[1].density
        })
    desc.appendChild(planetName)
    desc.appendChild(planetType)
    desc.appendChild(planetVel)
    desc.appendChild(planetDiam)
    desc.appendChild(planetTemp)
    desc.appendChild(planetMass)
    desc.appendChild(planetDensity)

    desc.classList.remove('hide')
})

venus.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            planetName.textContent = data[2].name
            planetType.textContent = data[2].type
            planetVel.textContent = data[2].rotvel
        })
    desc.appendChild(planetName)
    desc.appendChild(planetType)
    desc.appendChild(planetVel)
    desc.classList.remove('hide')
})

