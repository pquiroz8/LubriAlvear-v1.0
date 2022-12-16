//*! La funcionalidad de este botón será desarrollada para la próxima entrega */

/* let productos_stock = [
    {prodId:1, prodName:"Aceite Motul 5w30", prodCategory:"Lubricantes", prodPrice: 5140.00, prodStock:300},
    {prodId:2, prodName:"Aceite Mannol 5w40", prodCategory:"Lubricantes", prodPrice:8935.00, prodStock:200},
    {prodId:3, prodName:"Caja Fusilera Peugeot 408", prodCategory:"Electricidad", prodPrice:62000.00, prodStock:20},
    {prodId:4, prodName:"Caja Fusilera Ford Focus", prodCategory:"Electricidad", prodPrice:6400, prodStock:15},
    {prodId:5, prodName:"Cinta aisladora", prodCategory:"Otros", prodPrice:750, prodStock:500},
    {prodId:6, prodName:"Compresor 12v", prodCategory:"Otros", prodPrice:12990, prodStock:50},
    {prodId:7, prodName:"Aceite Total 10w40", prodCategory:"Lubricantes", prodPrice:5140, prodStock:250},
    {prodId:8, prodName:"Kit seguridad reglamentario", prodCategory:"Otros", prodPrice:7800, prodStock:100}
];
let prodNewPrice;
let prodSetPrice;*/

function setPrice(){
    alert("La funcionalidad de este botón será desarrollada para la próxima entrega");
}
    /*modifProducto = true;
    while (modifProducto) {
        let prodDisponibles = "";
        for (let item of productos_stock){
            prodDisponibles += "Id: " + item.prodId + " - " + item.prodName + "    $ " + item.prodPrice + "    Stock: " + item.prodStock +"\n"; 
        }
    
        productoModificar = parseInt(prompt("Seleccione un producto para modificar su precio:(Ingrese su Id)\n" + prodDisponibles));
        console.log("Id ingresado: " + productoModificar);
        let prodSetPrice = buscarProducto(productoModificar);
        console.log(prodSetPrice);

        if (prodSetPrice != null){
            prodNewPrice = parseFloat(prompt(prodSetPrice.prodName + "\n Precio actual: $" + prodSetPrice.prodPrice +  "\n Ingrese el nuevo precio del producto."));
            productos_stock.prodPrice = prodNewPrice;
            alert("El nuevo precio del producto " + prodSetPrice.prodName + " es: \n  $ " + prodNewPrice);
            console.log(prodSetPrice);
        } else {
            alert("Usted ingresó: " + productoModificar + ".\n" + "El producto ingresado no existe.");
        }
        console.log(productos_stock);
        modifProducto = confirm("¿Desea modificar otro producto?");
    }
    console.log(productos_stock);

}

function buscarProducto(id){
    return (productos_stock.find(prod => prod.prodId === id) || null);
*/