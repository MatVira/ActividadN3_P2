class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `

      <style>

        ul {

          font-family: Arial;
          padding-left: 20px;

        }

        li {
          margin: 3px 0;
        }

      </style>

      <h3>Resultado:</h3>
      <ul id="lista"></ul>

    `;

    window.addEventListener('rango-seleccionado', (e) => {
      const { inicio, fin } = e.detail;
      this.mostrarLista(inicio, fin);
    });
  }

  mostrarLista(inicio, fin) {

    const lista = this.shadowRoot.querySelector('#lista');
    lista.innerHTML = '';

    for (let i = inicio; i <= fin; i++) {

      const li = document.createElement('li');
      li.textContent = `${i} - ${i % 2 === 0 ? 'Par' : 'Impar'}`;
      lista.appendChild(li);

    }
  }

}

customElements.define('par-impar-lista', ParImparLista);