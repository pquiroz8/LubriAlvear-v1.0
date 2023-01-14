let productosCargados = [];
let productosCargadosJSON = [];

const cargarNuevoProducto = () => {
    let prodCategory = document.getElementById("prodCat").options[document.getElementById("prodCat").selectedIndex].text;
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;
    let prodId = 0; //@todo idGenerator ();


    if ((prodName != '')&&(prodUnits > 0)&&( prodPrice > '0')) {
        const productoNuevo = {id:prodId, category:prodCategory, name:prodName, units:prodUnits, price:prodPrice}
        console.log(productoNuevo);
        productosCargados.push(productoNuevo);
        console.log(productosCargados);
        productosCargadosJSON = localStorage.setItem("productosCargadosJSON", JSON.stringify(productosCargados));

        let nuevaFilaTabla = 
            `<td>${productoNuevo.id}</td>
            <td>${productoNuevo.category}</td>
            <td>${productoNuevo.name}</td>
            <td>${productoNuevo.price}</td>
            <td>${productoNuevo.units}</td>`;

        document.getElementById("tbody").insertRow().innerHTML = nuevaFilaTabla;
        
        document.getElementById("prodName").value = '';
        document.getElementById("unitPrice").value = '';
        document.getElementById("prodUnits").value = ''; 
    } else {
        validarCarga();
    }

}

const actualizarStock = () => {
        Swal.fire({
            title: '¿Revisaste?',
            text:'Estás por modificar tu stock',
            showDenyButton: true,
            confirmButtonText: 'Todo en orden',
            confirmButtonColor:'#ecab0f',
            denyButtonText: `Voy a revisar`,
            denyButtonColor:'#282A3A'
        }).then((result) => {
            if (result.isConfirmed) {
            let productosGuardadosJSON = localStorage.setItem("productosGuardadosJSON", JSON.stringify(productosCargados));
            localStorage.removeItem("productosCargadosJSON");
            document.getElementById("tbody").remove();
            swal.fire({
                title: 'Los productos fueron guardados',
                text: 'Tu stock se ha modificado',
                type: 'success',
                iconColor:'#ecab0f',
                confirmButtonColor:'#ecab0f'})
            } else if (result.isDenied) {
                swal.fire({
                    title: 'OK, Revisá',
                    text: 'Por ahora nada ha cambiado',
                    type: 'error',
                    iconColor:'#ecab0f',
                    confirmButtonColor:'#282A3A'})
            }
        })
    }


document.getElementById("btn-agregarProd").addEventListener("click",cargarNuevoProducto);
document.getElementById("btn-actualizarStock").addEventListener("click",actualizarStock);

function validarCarga () {
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;

    (prodName.trim() == '') ? mostrarError("Nombre del producto") : (prodUnits == 0 ) ? mostrarError("Unidades") : (prodPrice == 0) ? mostrarError("Precio") : false
}

function mostrarError(campo) {
    Swal.fire({
        title: 'Error',
        text: 'Falta completar el campo: ' + campo,
        icon:'error',
        iconColor:'#ecab0f',
        background: '#282A3A',
        color: '#FCFFE7',
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#ecab0f'})
}


