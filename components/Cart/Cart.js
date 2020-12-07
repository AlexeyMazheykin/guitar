class Cart {
    handleClear () {
        ROOT__CART.innerHTML = ``;
    }
    render () {
        let htmlCatalog = ``;
        let sumPrice = 0;
        const productStore = localStorageUtil.getProducts();
        CATALOG.forEach(({id, name, price}) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <li class="cart__item"><span class="cart__item-name">🎸 ${name}</span> <span class="cart__item-price">${price.toLocaleString('ru-RU')}</span></li>
                `
                sumPrice += price;
            }

        });
        const html = `
        <div class="cart-container">
            <ul class="cart-list">
                ${htmlCatalog}
                <li class="cart__item"><span class="cart__item-name">🎸 Сумма: </span> <span class="cart__item-price">${sumPrice.toLocaleString('ru-RU')}</span></li>
            </ul>
            <div class="cart-close" onclick="cart.handleClear();"></div>
            
        </div>
        `;
        ROOT__CART.innerHTML = html;
    }
}
let cart = new Cart();