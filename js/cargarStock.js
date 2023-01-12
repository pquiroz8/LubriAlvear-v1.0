
const cargarNuevoProducto = () => {
    let prodCategory = document.getElementById("prodCat").options[document.getElementById("prodCat").selectedIndex].text;
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;
    let prodId = 0; //@todo idGenerator ();

    if ((prodName != '')&&(prodUnits != 0)&&( prodPrice != '0')) {
        const productoNuevo = {id:prodId, category:prodCategory, name:prodName, units:prodUnits, price:prodPrice}
        localStorage.setItem("productoNuevoJSON", JSON.stringify(productoNuevo));

        let nuevaFilaTabla = 
            `<td>${productoNuevo.id}</td>
            <td>${productoNuevo.category}</td>
            <td>${productoNuevo.name}</td>
            <td>${productoNuevo.price}</td>
            <td>${productoNuevo.units}</td>`;

        document.getElementById("tablaProd").insertRow().innerHTML = nuevaFilaTabla;
        
        document.getElementById("prodName").value = '';
        document.getElementById("unitPrice").value = '';
        document.getElementById("prodUnits").value = ''; 
    } else {
        validarCarga();
    }

}

document.getElementById("btn-agregarProd").addEventListener("click",cargarNuevoProducto);


function validarCarga () {
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;

    (prodName.trim() == '') ? mostrarError("Nombre del producto") : (prodUnits == 0 ) ? mostrarError("Unidades") : (prodPrice == 0) ? mostrarError("Precio") : false
}

function mostrarError(campo) {
    Swal.fire({
        title: 'Error',
        text: 'Falta completar el campo ' + campo,
        icon:'error',
        background: '#282A3A',
        color: '#FCFFE7',
        confirmButtonText: '¡Entendido!'})
}
