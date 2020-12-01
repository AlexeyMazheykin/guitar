class Products {

    render() {
        let htmlCatalog = ''
        CATALOG.forEach(({id, img, name, price}) => {
            htmlCatalog += `
            <li class="products-item">
                <span class="products-item__name">${name}</span>
                 <img class="products-item__img"  src=${img} alt=${name}>
                 <span class="products-item__price">🎸 ${price.toLocaleString('ru-RU')} USD</span>
                <button class="products-item__btn">Добавить в корзину</button>
            </li>
          `
        });
        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;
        ROOT__PRODUCTS.innerHTML = html
    }

}

let prod = new Products();
prod.render()

