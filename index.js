function render () {
    const productStore = localStorageUtil.getProducts();

    header.render(productStore.length);

    prod.render()
}
let CATALOG = [];



fetch('./server/catalog.json')
.then(result => result.json())
.then(body => {
    CATALOG = body;
    render();
})
.catch(error => {
    console.log(error);
})