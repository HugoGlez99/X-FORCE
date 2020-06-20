class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
            Copyright &copy;2020
             <li>Ambrosio Dominguez Miguel</li>
             <li>Castellanos Buendia Sarahí</li>
             <li>Gonzalez Perez Hugo Alberto</li>
             <li>Perez Espinoza Emmanel</li>
             <li>Ramirez Bello Eduardo</li>
             <li>Torres Arellano Jiovanni</li>
             <li>Santos Gomez Cristopher</li>
            `;   
    }
}
customElements.define("mi-footer", MiFooter);

