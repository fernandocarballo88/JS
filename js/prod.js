const productos = [
    {
        id: 1,
        nombre:"X wing",
        img: src="../assets/img/xwing.jpg",
        precio:50,
        stock:4,
    },
    {
        id: 2,
        nombre:"Imperial Shuttle",
        img: src="../assets/img/imperial shuttle.jpeg",
        precio:60,
        stock:3,
    },
    {
        id: 3,
        nombre:"Naboo Starfighter",
        img: src="../assets/img/naboo n1.jpg",
        precio:80,
        stock:1,
    },
    {
        id: 4,
        nombre:"Razor Crest",
        img: src="../assets/img/razor crest.jpg",
        precio:100,
        stock:2,
    },
    {
        id: 5,
        nombre:"Tie Fighter",
        img: src="../assets/img/tie fighter.jpg",
        precio:30,
        stock:10,
    },
    {
        id: 6,
        nombre:"Imperial Cruisser",
        img: src="../assets/img/imperial cruiser.jpg",
        precio:200,
        stock:1,
    },
]

const verProducto = ({nombre,img,precio,stock}) =>{
    const contenedorProductos = document.querySelector("#contenedorProductos")
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.innerHTML = `
                                <h3>${nombre}</h3>
                                <img src="${img}">
                                <span>Prcio: ${precio}$</span>
                                <span>Stock: ${stock}</span>
                                <button>AGREGAR</button>
`
contenedorProductos.append(tarjetaProducto)

}

const verProductos = () =>{
    productos.forEach(producto =>{
        verProducto(producto)
    })
}

verProductos()

/*
const contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.innerHTML = `
                                <h3>${producto.nombre}</h3>
                                <img src="${producto.img}">
                                <span>Prcio: ${producto.precio}$</span>
                                <span>Stock: ${producto.stock}</span>
                                <form>
                                </form>
                                <button>COMPRAR</button>
`
contenedorProductos.append(tarjetaProducto)
})
*/
