function render () {
    const productStore = localStorageUtil.getProducts();

    header.render(productStore.length);

    prod.render()
}
spinner.render()
let CATALOG = [];



fetch('./server/catalog.json')
.then(result => result.json())
.then(body => {
    CATALOG = body;
    setTimeout(() => {
        spinner.handleClear();
        render();
    },3000)

})
.catch(error => {
    console.log(error);
})