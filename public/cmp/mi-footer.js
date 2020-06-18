class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Hugo Alberto Gonzalez Perez
                                Ambrosio Dominguez Miguel
                                Ramirez Bello Eduardo
                                Santos Gomez Kevin 
                                Castellanos Buendia Sarahí
                                Perez Espinoza Rogelio
                                Torres Arellano Jesus.`;
    }
}
customElements.define("mi-footer", MiFooter);