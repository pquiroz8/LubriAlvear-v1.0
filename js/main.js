function cargarStock(){
    //Entrada de datos
    
    let cargaProd = true;
    let sameCategory = true;
    let producto;
    console.log("¿Carga producto? " + cargaProd);
    
    const productos_stock = [];
    class Producto {
        constructor (prod_id, prod_category, prod_name, prod_stock, prod_price){
            this.prod_id = prod_id;
            this.prod_name = prod_name;
            this.prod_category = prod_category;
            this.prod_stock = prod_stock;
            this.prod_price = prod_price;
            this.iva = 0.21;
        }
        applyIVA(){
            this.prod_price = this.prod_price + (this.prod_price * this.iva);
        }
        /* setPrice(id){              
            this.prod_price [] */
        } //*TODO: Desarrollar método para establecer precio - Ingreso un ID de producto y si existe, me deja cambiar el precio, si no, me ofrece crear el producto llamando a cargarStock()

    while (cargaProd) { ///@audit-ok //* Carga de productos_stock
            do{ //Validación para la categoría del producto
                prod_category = prompt("Ingrese la categoría del producto(Lubricante/Electricidad/Otros)").toUpperCase();
                console.log("Categoría: " + prod_category);
            } while ((prod_category != "LUBRICANTE") && (prod_category != "ELECTRICIDAD") && (prod_category != "OTROS"));
            

        do {    
            do{ //Validación para nombre distinto de vacío
                prod_name = prompt("Ingrese el nombre del producto").toUpperCase();
                console.log("Producto: " + prod_name);
            } while (prod_name == null);

            do{ //Validación stock > 0
                prod_stock = parseInt(prompt("Ingrese la cantidad de productos a registrar"));
                console.log("Stock: " + prod_stock);
            } while (prod_stock < 0); 

            do{ // Validación precio > 0
                prod_price = parseFloat(prompt("Ingrese el precio del producto"));
                console.log("Precio: " + prod_price);
            } while (prod_price < 0 );

            prod_id = productos_stock.length + 1;
            producto = new Producto(prod_id,prod_category,prod_name,prod_stock,prod_price); 
            console.log(producto);
            productos_stock.push(producto);
            console.log(productos_stock);
            sameCategory = confirm("Desea agregar otro producto de la misma categoría");
        } while (sameCategory);
        prod_id = productos_stock.length + 1;
        cargaProd = confirm("¿Desea agregar un nuevo producto?"); 
    }
    return productos_stock; //? Verificar como hacer para sacar los valores desde la función cargarStock
}

function realizarCompra(){
    let cargaCarrito = true;
    console.log("¿Carga carrito? " + cargaCarrito);
    const productos_catalogo = [];
    let prod_disp = "";

    while (cargaCarrito) {
        for (let item of product_stock){
            prod_disp += item.prod_id + " - " + item.prod_name + "$ " + item.prod_price + "\n"; 
        }
        let produ = prompt("Seleccione un producto para agregar al carrito:\n" + prod_disp);
        console.log(produ);
    }










}