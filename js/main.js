const cargarStock = async () => {
const respuesta = await fetch("https://api.jsonbin.io/v3/b/63d73618ace6f33a22cdae88?meta=false");
const stockAvaible = await respuesta.json();

}

const setProductLS = (stockAvaible) => {
	localStorage.setItem("stockAvaibleJSON", JSON.stringify(stockAvaible));
}

const getProductLS = () => {
	return JSON.parse(localStorage.getItem("stockAvaibleJSON")) || [];
}

const setProductCart = (productCart) => {
    localStorage.setItem("productCart", JSON.stringify(productCart));
}

const getProductCart = () => {
    return JSON.parse(localStorage.getItem("productCart")) || [];
}

const dumpCart = () => {
	localStorage.removeItem('productCart');
	renderProductCart();
	renderCartBtn();
}

const totalCart = () => {
	const productInCart = getProductCart();
	return productInCart.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const productInCart = getProductCart();

    return productInCart.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

const renderCartBtn = () => {
    let salida = `<span class=" top-0 start-0 translate-middle badge rounded-pill bg-warning text-dark border border-dark">${totalCart()}</span>`;
    document.getElementById("cartButton").innerHTML = salida;
}



const productInCart = [];

function addToCart(id) {
	
    let products = getProductLS();
    const prodToAdd = products.find(item => item.id === id);
    productInCart.push(prodToAdd); 
    setProductCart(productInCart);
    renderCartBtn();
    }

	const isInCart = (id) => {
		const productInCart = getProductCart();
	
		return productInCart.some(item => item.id === id);
	}