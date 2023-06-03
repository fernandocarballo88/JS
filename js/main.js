const btnClick = document.querySelector("#btnClick")
btnClick.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("click")
})

localStorage.setItem("saludo","Contactate con Nosotros")
const saludo = localStorage.getItem("saludo")
const contenedorContacto = document.querySelector("#contenedorContacto")
contenedorContacto.innerText = saludo
;
const info = {informacion:"Para informacion y promociones"}
localStorage.setItem("info",JSON.stringify(info))
infoPromos.innerText = info.informacion











