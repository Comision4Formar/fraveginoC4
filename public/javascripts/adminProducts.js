console.log('JS adminProducts success');

const productsBox = document.getElementById('productsBox');

window.addEventListener('load', async () => {
    try {
        let response = await fetch('/admin/products/all')
        let result = await response.json()
        console.log(result)

        localStorage.setItem('productos',JSON.stringify(result.productos));
        let productos = JSON.parse(localStorage.getItem('productos'));

        viewProducts(productos)

    } catch (error) {
        console.log(error);
    }
})

const viewProducts = (productos) => {
    productsBox.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        
        let item = `
        <tr>
            <th scope="row">${productos[i].id}</th>
            <td>${productos[i].nombre}</td>
            <td>${productos[i].descripcion}</td>
            <td>${productos[i].precio}</td>
            <td>${productos[i].descuento}</td>
            <td>${productos[i].categoria.nombre}</td>
        </tr>
        `
        productsBox.innerHTML += item
        
    }

}