class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `

      <style>

        label, input, button {
          margin: 5px;
          font-family: Arial;
        }

      </style>

      <label>Inicio: <input type="number" id="inicio" /></label>
      <br>
      <label>Fin: <input type="number" id="fin" /></label>
      <br>
      <br>
      <button id="enviar">Mostrar</button>

    `;

    this.shadowRoot.querySelector('#enviar').addEventListener('click', () => this.enviarRango());
  }


}

customElements.define('input-range', InputRange);