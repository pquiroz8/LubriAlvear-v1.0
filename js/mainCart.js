const renderProductCart =  () => {
	const productInCart = getProductCart();
	let newLine = "";
	
    if (totalCart() > 0) {    
        newLine = `<table class="table"> 
        <tbody>
        <tr>
        <td colspan="5" class="text-end"><a href="#" class="btn btn-warning" onClick="dumpCart();">Vaciar Carrito <i class="fa-solid fa-cart-arrow-down"></i></a></td>
        </tr>`;

        for (let producto of productInCart) {
            newLine += `<tr>
            <td><img src="/images/favicon-96x96.png" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end text-center"><a class="btn bg-warning text-dark" href="#" title="Eliminar Producto" onClick="dump(${producto.id});"><i class="fa-regular fa-trash-can"></i></a></td>`;
        }

        newLine += `<tr>
        <td colspan="3"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    } else {
        newLine = `<div class="alert alert-warning text-center fs-5" role="alert">Tu carrito está vacío</div>`;
    }

    document.getElementById("selectedProd").innerHTML = newLine;
		
		};

renderProductCart();
renderCartBtn();