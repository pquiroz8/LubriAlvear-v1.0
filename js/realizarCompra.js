/* document.addEventListener("DOMContentLoaded", function(event){
    let productosEnStock = JSON.parse(localStorage.getItem("productosGuardadosJSON"));

    productosEnStock.forEach( function(prodEnStock) {
        console.log(prodEnStock);
        let nuevaFilaTabla = 
            `<td>${prodEnStock.id}</td>
            <td>${prodEnStock.category}</td>
            <td>${prodEnStock.name}</td>
            <td>${prodEnStock.price}</td>
            <td>${prodEnStock.units}</td>
            <td><button class="btn" onclick="agregarProdCarrito()">Agregar al Carrito</button></td>`;

        document.getElementById("tablebody").insertRow().innerHTML = nuevaFilaTabla;
    });
})


const agregarProdCarrito = () => {
    Swal.fire({
        title:'¿Y la funcionalidad?',
        text:'Tranquilo... Pronto podrás disfrutarla',
        icon:'question',
        iconColor:'#ecab0f',
        confirmButtonColor:'#282A3A'})
}

const realizarCompra = () => {
    Swal.fire({
        title:'¿Y la funcionalidad?',
        text:'Tranquilo... Pronto podrás disfrutarla',
        icon:'question',
        iconColor:'#ecab0f',
        confirmButtonColor:'#282A3A'})
}




document.getElementsById("realizarCompra").addEventListener("click",realizarCompra); */





















/* //!Harcodeo los productos cargados porque no puedo traerme los valores cargados en cargarStock() hasta que no veamos storage

const productosCatalogo = [
    {prodId:1, prodName:"Aceite Motul 5w30", prodCategory:"Lubricantes", prodPrice: 5140.00, prodStock:300},
    {prodId:2, prodName:"Aceite Mannol 5w40", prodCategory:"Lubricantes", prodPrice:8935.00, prodStock:200},
    {prodId:3, prodName:"Caja Fusilera Peugeot 408", prodCategory:"Electricidad", prodPrice:62000.00, prodStock:20},
    {prodId:4, prodName:"Caja Fusilera Ford Focus", prodCategory:"Electricidad", prodPrice:6400, prodStock:15},
    {prodId:5, prodName:"Cinta aisladora", prodCategory:"Otros", prodPrice:750, prodStock:500},
    {prodId:6, prodName:"Compresor 12v", prodCategory:"Otros", prodPrice:12990, prodStock:50},
    {prodId:7, prodName:"Aceite Total 10w40", prodCategory:"Lubricantes", prodPrice:5140, prodStock:250},
    {prodId:8, prodName:"Kit seguridad reglamentario", prodCategory:"Otros", prodPrice:7800, prodStock:100}
];
const carritoCompra = []; //* Array donde se van a cargar los productos que se agreguen al carrito

//*Función para realizar la compra de productos elegidos desde un catálogo previamente establecido

function realizarCompra(){
    let cargaCarrito = true;
    let productoEnCarrito;
    let prodAgregado;

//*Cargamos el carrito con los productos elegidos
    while (cargaCarrito) {
        let prodDisponibles = "";
        for (let item of productosCatalogo){
            prodDisponibles += "Id: " + item.prodId + " - " + item.prodName + "    $ " + item.prodPrice + "    Stock: " + item.prodStock +"\n"; 
        }
    
        productoEnCarrito = parseInt(prompt("Seleccione un producto para agregar al carrito:(Ingrese su Id)\n" + prodDisponibles));
        console.log("Id ingresado: " + productoEnCarrito);
        prodAgregado = buscarProducto(productoEnCarrito);
            
        if (prodAgregado != null){
            console.log(prodAgregado);
            carritoCompra.push(prodAgregado);
            alert("Se ha agregado el producto con Id: " + productoEnCarrito);
            console.log(carritoCompra);
        }
        cargaCarrito = confirm("¿Desea agregar otro producto?");
    }
    const carritoCompraUnicos = eliminarDuplicados(carritoCompra);
    console.log(carritoCompraUnicos);

    let prodCargados = "";
        for (let item of carritoCompraUnicos){
            prodCargados += "Id: " + item.prodId + " - " + item.prodName + "    $ " + item.prodPrice + "    Stock: " + item.prodStock +"\n"; 
        }
    alert("SE HAN CARGADO LOS SIGUIENTES PRODUCTOS: \n" + prodCargados);
}
//* Busco el producto con el Id ingresado, devuelvo null si ingresa un Id que no está registrado
function buscarProducto(id){
    return (productosCatalogo.find(prod => prod.prodId === id) || null);
}

//* Función para eliminar elementos duplicados. De esta manera solo se mostrará una vez el producto ingresado
function eliminarDuplicados(carritoCompra){
    const carritoCompraUnicos = new Set (carritoCompra);
    const carritoSinDuplicados = [...carritoCompraUnicos]
    return carritoSinDuplicados;
} */