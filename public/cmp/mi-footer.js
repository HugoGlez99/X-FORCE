class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
            <p>Copyright &copy; 2020 Hugo Alberto Gonzalez Perez.
            <br> Ambrosio Dominguez Miguel
            <br>Ramirez Bello Eduardo
            <br>Santos Gomez Kevin 
            <br>Castellanos Buendia Sarahí
            <br>Perez Espinoza Rogelio
            <br>Torres Arellano Jesus`;
    }
}
customElements.define("mi-footer", MiFooter);

