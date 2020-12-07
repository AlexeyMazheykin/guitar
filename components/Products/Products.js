class Products {
    constructor() {
        this.classNameActive = 'products-item__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id)
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        header.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        CATALOG.forEach(({id, img, name, price}) => {
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <li class="products-item">
                <span class="products-item__name">${name}</span>
                <img class="products-item__img" src=${img} alt=${name}>
                <span class="products-item__price">🎸 ${price.toLocaleString('ru-RU')} USD</span>
                <button class="products-item__btn ${activeClass}" onclick="prod.handleSetLocationStorage(this, '${id}')"
                >${activeText}</button>
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

