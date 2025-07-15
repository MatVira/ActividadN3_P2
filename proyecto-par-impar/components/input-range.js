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

  enviarRango() {

    const inicio = parseInt(this.shadowRoot.querySelector('#inicio').value);
    const fin = parseInt(this.shadowRoot.querySelector('#fin').value);
    
        if (isNaN(inicio) || isNaN(fin)) {
      alert('Por favor ingresa valores numéricos válidos.');
      return;
    }

    if (inicio > fin) {
      alert('El número inicial debe ser menor o igual al final.');
      return;
    }

    const evento = new CustomEvent('rango-seleccionado', {
      detail: { inicio, fin },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evento);

  }

}

customElements.define('input-range', InputRange);