class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }



}

customElements.define('input-range', InputRange);