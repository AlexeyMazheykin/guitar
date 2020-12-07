class Cart {
    render () {
        let htmlCatalog = ``;
        CATALOG.forEach(({id, name, price}) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <li class="cart__item"><span class="cart__item-name">🎸 ${name}</span> <span class="cart__item-price">${price.toLocaleString('ru-RU')}</span></li>
                `
            }
        });
        const html = `
        <ul class="cart-container">
        ${htmlCatalog}
        </ul>
        `;
        ROOT__CART.innerHTML = html;
    }
}
let cart = new Cart();