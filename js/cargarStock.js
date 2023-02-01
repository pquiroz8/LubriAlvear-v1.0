cargarStock();
let stockAvaible = JSON.parse(localStorage.getItem('stockAvaibleJSON'));

document.addEventListener("DOMContentLoaded", function(event){
    const categoriesCreated = createCategories(stockAvaible);
    renderCategories(categoriesCreated);
});

let createdProductArray = [];

const addProd = () => {
    let prodCategory = document.getElementById('selectCategories').options[document.getElementById('selectCategories').selectedIndex].text;
    let prodName = document.getElementById("prodName").value;
    let prodQuant = parseInt(document.getElementById("prodQuant").value);
    let prodPrice = parseFloat(document.getElementById("prodPrice").value);
    let prodId;

    if ((prodCategory != "Elija una categoría") && (prodName != "") && (prodPrice > 0) && (prodQuant > 0)) {
        prodId = idGeneration(prodCategory,stockAvaible);
        const createdProduct = {id:prodId, categoria:prodCategory, nombre:prodName, cantidad:prodQuant, precio:prodPrice}

        let productCreatedNewRow = 
            `<td class="fs-6">${createdProduct.id}</td>
            <td class="fs-6">${createdProduct.categoria}</td>
            <td class="fs-6">${createdProduct.nombre}</td>
            <td class="fs-6"> $ ${createdProduct.precio}</td>
            <td class="fs-6">${createdProduct.cantidad}</td>
            <td class="fs-6 deleteButtons"><button class="btn btn-warning text-dark deleteButtons" id="${createdProduct.id}" onClick="deleteProduct(${createdProduct.id})"><i class="fa-solid fa-trash"></i></button></td>`;
        document.getElementById("tableCreatedProd").insertRow().innerHTML = productCreatedNewRow;

        createdProductArray.push(createdProduct);
        console.log(createdProductArray);

        document.getElementById("prodName").value = '';
        document.getElementById("prodPrice").value = '';
        document.getElementById("prodQuant").value = ''; 
    } else {
        formValidation();
    }
    
}

const createCategories = (array) => {
    const allCategories = [];
    array.forEach(element => {
        let categories = Object.values(element);
        allCategories.push(categories[1])
    });
    const categoriesArray = new Set(allCategories);
    let categoriesAvaible = [...categoriesArray];
    return categoriesAvaible;
}
const renderCategories = (array) => {
    array.forEach(element => {
        const optionCreated = document.createElement('option');
        optionCreated.value = element;
        optionCreated.text = element;
        document.getElementById('selectCategories').appendChild(optionCreated);
    })
    
}



const idGeneration = (category,stock) => {
    const numProd = Math.floor(Math.random()*10000);
    let findElement = stock.find(element => element.categoria === category).id;
    const codProd = findElement.slice(0,3);
    const prodId = codProd.concat(numProd);
    const filteredStock = stock.filter(element => element.categoria === category);
    
    let validation = validateprodId(prodId,filteredStock);

    if (validation) {
        return prodId;
    }
}

const validateprodId = (id,prodArray) => {
    prodArray.find((id,prod) => {
        let validId = (prod.id === id) ? false : true;
        return validId
    });
    return id;
}

const formValidation = () => {
    let prodName = document.getElementById("prodName").value;
    let prodQuant = document.getElementById("prodQuant").value;
    let prodPrice = document.getElementById("prodPrice").value;
    let prodCategory = document.getElementById('selectCategories').options[document.getElementById('selectCategories').selectedIndex].text;
    

    if ((prodQuant < 0 )||(prodQuant == "" )) { mostrarError("Cantidad");}
    if ((prodPrice < 0)||(prodPrice == "")){ mostrarError("Precio");}
    if (prodName.trim() == ''){ mostrarError("Nombre del producto");}
    if (prodCategory == "Elija una categoría") {mostrarError("Categoría")}
} 

const mostrarError = (campo) => {  //* Mensajes de error.
    Swal.fire({
        title: 'Error',
        text: 'Error al completar el campo: ' + campo,
        icon:'error',
        iconColor:'#ecab0f',
        background: '#282A3A',
        color: '#FCFFE7',
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#ecab0f'})
}

const updateStock = () => {
    if (createdProductArray.length != 0) {
        Swal.fire({
            title: 'Estás por agregar productos a tu stock',
            text:'¿Estás seguro?',
            showDenyButton: true,
            denyButtonText: `Voy a revisar`,
            denyButtonColor:'#282A3A',
            confirmButtonText: 'Sí, seguro',
            confirmButtonColor:'#ecab0f',
        }).then((result) => {
            if (result.isConfirmed) {
            stockAvaible = stockAvaible.concat(createdProductArray);
            localStorage.setItem("stockAvaibleJSON", JSON.stringify(stockAvaible));
            document.getElementById('tableCreatedProd').remove();
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
    } else {
        Swal.fire({
            icon: 'error',
            iconColor:'#ecab0f',
            title: 'Nada por aquí, nada por allá',
            text: 'No hay productos para cargar',
            confirmButtonColor:'#ecab0f'
        })
    }
    cleanForms();
    uploadNewProducts();
}

const uploadNewProducts = async() => {
    await fetch ('https://api.jsonbin.io/v3/b/63d73618ace6f33a22cdae88', {
        method: 'PUT',
        body: JSON.stringify(createdProductArray),
        headers: {'Content-type':'application/json',
                'X-Access-Key':'$2b$10$z27qCt3/FVILsB0ZcqGcM.uNFYxKHYef/ctLS3evnZsDlFzj0L6nC'}
    })
}
const cleanForms = () => {
    const forms = document.getElementById('mainForm');
    forms.reset(); 
}   

const deleteProduct = (target) => {
    const rowtoDelete= target.parentElement.parentElement;
    console.log(rowtoDelete);
    const prodToDelete = target.id;
    
    Swal.fire({
        title: 'Vas a eliminar el producto ' + target.id,
        text:'¿Estás seguro?',
        showDenyButton: true,
        denyButtonText: `Mmm, mejor no`,
        denyButtonColor:'#282A3A',
        confirmButtonText: 'Sí, seguro',
        confirmButtonColor:'#ecab0f',
    }).then((result) => {
        if (result.isConfirmed) {
            rowtoDelete.remove();
            createdProductArray = createdProductArray.filter((item) => item.id != prodToDelete)
        swal.fire({
            title: 'El producto fue eliminado',
            /* type: 'success', */
            iconColor:'#ecab0f',
            confirmButtonColor:'#ecab0f'})
        } else if (result.isDenied) {
            swal.fire({
                title: 'El elemento no se ha eliminado',
                text: 'Por ahora nada ha cambiado',
                type: 'error',
                iconColor:'#ecab0f',
                confirmButtonColor:'#282A3A'})
        }
    })
    
}


document.getElementById('addProduct').addEventListener('click',addProd);
document.getElementById('updateStock').addEventListener('click',updateStock);
