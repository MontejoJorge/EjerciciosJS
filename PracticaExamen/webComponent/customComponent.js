class BotonJorge extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<div${this.funcion()}>Boton</div>`;
    }
    funcion(){
        this.addEventListener("click", function(){
            alert("dale")
        })
    }

  }
  window.customElements.define('boton-jorge', BotonJorge);