class Header {
    handlerOpenCart () {
        cart.render();
    }
    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="header.handlerOpenCart()">
                    🍿 ${count}
                </div>
            </div>
        `;
        ROOT__HEADER.innerHTML = html;
    }
}

const header = new Header();

const productStore = localStorageUtil.getProducts();
header.render(productStore.length);
