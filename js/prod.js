const productos = [
    {
        id: 1,
        nombre:"X wing",
        img: src="../assets/img/xwing.jpg",
        piezas: 500,
        precio:50,
                stock:4,
    },
    {
        id: 2,
        nombre:"Imperial Shuttle",
        img: src="../assets/img/imperial shuttle.jpeg",
        piezas: 1000,
        precio:60,
        stock:3,
    },
    {
        id: 3,
        nombre:"Naboo Starfighter",
        img: src="../assets/img/naboo n1.jpg",
        piezas: 1200,
        precio:80,
        stock:1,
    },
    {
        id: 4,
        nombre:"Razor Crest",
        img: src="../assets/img/razor crest.jpg",
        piezas: 1800,
        precio:100,
        stock:2,
    },
    {
        id: 5,
        nombre:"Tie Fighter",
        img: src="../assets/img/tie fighter.jpg",
        piezas: 300,
        precio:30,
        stock:10,
    },
    {
        id: 6,
        nombre:"Imperial Cruisser",
        img: src="../assets/img/imperial cruiser.jpg",
        piezas: 2000,
        precio:200,
        stock:1,
    },
    {
        id: 7,
        nombre:"AT AT",
        img: src="../assets/img/atat.jpg",
        piezas: 3000,
        precio:1000,
        stock:1,
    },
    {
        id: 8,
        nombre:"AT TE",
        img: src="../assets/img/atte.jpg",
        piezas: 1300,
        precio:175,
        stock:2,
    },
    {
        id: 9,
        nombre:"Milenium Falcon",
        img: src="../assets/img/milleniumfalcon.jpg",
        piezas: 2500,
        precio:12000,
        stock:1,
    },
]

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

const verProducto = ({id,nombre,img,piezas,precio,stock}) =>{
    const contenedorProductos = document.querySelector("#contenedorProductos")
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.innerHTML = `
                                <div class="tarjetaProducto">
                                <h3>${nombre}</h3>
                                <img src="${img}">
                                <span>Cantidad de Piezas: ${piezas}</span>
                                <span>Precio: ${precio} USD</span>
                                </div>
                                <form id="formularioAgregar${id}">
                                <input name="id" type="hidden" value="${id}">
                                <input name="cantidad" type="number" value="1" max="${stock}">
                                <button type="submit">AGREGAR</button>
                                </form>
`
contenedorProductos.append(tarjetaProducto)
}

const agregarCarrito =(id) =>{
    const formularioAgregar = document.querySelector("#formularioAgregar" + id)
    formularioAgregar.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        carrito.push({
            id,
            cantidad,
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))
    })
}

const verProductos = () =>{
    productos.forEach(producto =>{
        if(producto.stock !=0){
        verProducto(producto)
        agregarCarrito(producto.id)}
    })
}

verProductos()



/*productos.forEach((producto)=>{
    const agregarChanguito = document.querySelector("#formulario")
    agregarChanguito.addEventListener("submit",(e)=>{
        e.preventDefault()
        
    })
})


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
