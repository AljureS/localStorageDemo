// Mide el tiempo en la página
let startTime = performance.now();

console.log("la pagina cargo");

window.addEventListener('beforeunload', () => {
    let endTime = performance.now(); // Tiempo actual
    let timeSpent = (endTime - startTime) / 1000; // Convertir a segundos
    console.log(`Tiempo en pantalla: ${timeSpent.toFixed(2)} segundos`);
    localStorage.setItem('lastTimeSpent', timeSpent);
    document.cookie = "yaperCookie; timeSpent" 
});

window.addEventListener('DOMContentLoaded', () => {
    let lastTime = localStorage.getItem('lastTimeSpent');
    if (lastTime) {
        console.log(`Tiempo en la última sesión: ${lastTime} segundos`);
    }
})

// Contador de clics en enlaces
const links = document.querySelectorAll('a');
let clickCount = 0;

links.forEach(link => {
    link.addEventListener('click', () => {
        clickCount++;
        console.log(`Clics en enlaces: ${clickCount}`);
    });
});

// Contador de clicks en boton 
let boton = document.getElementById('contador')
let conetedorContador = document.getElementById('containerParche')
let clickCountButton = 0 

boton.addEventListener('click', ()=>{
    clickCountButton ++;
    conetedorContador. textContent=''
    const parrafo = document.createElement('p')

    parrafo.textContent = `${clickCountButton}`
    conetedorContador.appendChild(parrafo)


})