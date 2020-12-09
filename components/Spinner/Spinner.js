class Spinner {
    handleClear () {
        ROOT__SPINNER.innerHTML = ''
    }

    render () {
        const html = `
            <div class="spinner-container">
                <img class="spinner-img" src="components/Spinner/img/spinner.svg">
            </div>
        `;
        ROOT__SPINNER.innerHTML = html;
    }
}
const spinner = new Spinner()