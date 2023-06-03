const productos = [
    {
        nombre:"X wing",
        precio:50,
        stock:4,
    },
    {
        nombre:"Imperial Shuttle",
        precio:60,
        stock:3,
    },
    {
        nombre:"Naboo Starfighter",
        precio:80,
        stock:1,
    },
    {
        nombre:"Razor Crest",
        precio:100,
        stock:2,
    },
    {
        nombre:"Tie Fighter",
        precio:30,
        stock:10,
    },
    {
        nombre:"Imperial Cruisser",
        precio:200,
        stock:1,
    },
]

let contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.innerHTML = `
                                <h3>${producto.nombre}</h3>
                                <img src="../assets/lego.jpg">
                                <span>Prcio: ${producto.precio}$</span>
                                <span>Stock: ${producto.stock}</span>
                                <button>COMPRAR</button>
`
contenedorProductos.append(tarjetaProducto)
})
