class Producto{
    constructor(nombre,precio,numero,cantidadPiezas){
        this.nombre = nombre;
        this.precio = precio;
        this.numero = numero;
        this.cantidadPiezas = cantidadPiezas;
    }
}

const naves = [];

let continuar = true;

while(continuar === true) {
    const nombre = prompt("Ingrese Nombre del Set Lego").toUpperCase();
    const precio = prompt("Ingrese Precio en Dolares");
    const numero = prompt("Ingrese Numero del Set");
    const cantidadPiezas = prompt("Cuantas Piezas Tiene");
    const nuevoSet = new Producto(nombre,precio,numero,cantidadPiezas);
    naves.push(nuevoSet);
    continuar = confirm("Desea continuar con la carga?");
}

let verLista = prompt("Desea ver la lista creada?\nsi\nno");
if(verLista === "si") {
for(let i = 0; i < naves.length; i++) {
    console.log(naves[i]);
}
}

const eliminarElemento = prompt("Desea Eliminar Set de la lista\nsi\nno")
if(eliminarElemento == "si"){
    const elementoAEliminar = prompt("Ingrese Numero del Set a Eliminar")
    const index = naves.findIndex((nuevoSet)=> nuevoSet.numero === elementoAEliminar)
    if(index != -1){
        naves.splice(index,1)
        alert("Producto Eliminado")
        for(let i = 0; i < naves.length; i++){
            console.log(naves[i])}
}
}

const calculoPesos = prompt("Desea calcular el precio en Pesos + Envio\nsi\nno")
if(calculoPesos=="si"){
    const envio = 2000
    const calcular = parseFloat(prompt("Ingrese el Precio en dolares"))
    alert("precio en Pesos mas Envio: "+((calcular*400)+envio))
}



