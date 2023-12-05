import { LitElement, css, html } from "lit";

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export class DonationThermometer extends LitElement {
  static get properties() {
    return {
      goal: { type: Number },
      raised: { type: Number },
      name: { type: String },
      fullStats: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.goal = 1000;
    this.raised = 500;
    this.fullStats = false;
  }

  render() {
    const percentage = (this.raised / this.goal) * 100;
    const color =
      percentage < 50 ? "red" : percentage < 90 ? "orange" : "green";
    return html`
      <div class="thermometer">
        <slot></slot>
        <strong class="goal">$${this.goal}</strong>
        <span class="glass"">
          <div class="progress" style="background-color: ${color}; height: ${percentage}%"></div>
        </span>
        <div class="bulb" style="background-color: ${color};">
          <span class="red-circle"></span>
          <span class="filler" style="background-color: ${color};">
            <span></span>
          </span>
        </div>
        <h2>${percentage}%</h2>
        ${
          this.fullStats
            ? html` <div class="full">
                <p>Goal: $${this.goal}</p>
                <p>Amount Raised: $${this.amountAchieved}</p>
              </div>`
            : ""
        }
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    .full {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #000000;
    padding: 1em;
  }

    .thermometer {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      margin-left: 20px;
      min-width: 200px;
    }

    .glass {
      background: #e5e5e5;
      border-radius: 100px 100px 0 0;
      display: block;
      height: 300px;
      margin: 0 35px 10px;
      padding: 5px;
      position: relative;
      width: 20px;
    }

    .progress {
      border-radius: 100px;
      display: block;
      width: 20px;
      position: absolute;
      bottom: 5px;
    }

    .goal {
      text-align: center;
    }

    .bulb {
  background: #e5e5e5;
  border-radius: 100px;
  display: block;
  height: 50px;
  margin: 0 35px 10px;
  padding: 5px;
  position: relative;
    top: -20px;
  width: 50px;
  .red-circle {
    border-radius: 100px;
    display: block;
    height: 50px;
    width: 50px;
  }
  .filler {
    border-radius: 100px 100px 0 0;
    display: block;
    height: 30px;
    width: 20px;
    position: relative;
      top: -65px;
      right: -15px;
    z-index: 30;
  }

  .full {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #000000;
  }
  `;
  }
}

window.customElements.define("donation-thermometer", DonationThermometer);
