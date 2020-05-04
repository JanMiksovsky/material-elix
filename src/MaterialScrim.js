import Backdrop from "../node_modules/elix/src/base/Backdrop.js";
import { template } from "../node_modules/elix/src/base/internal.js";
import html from "../node_modules/elix/src/core/html";

class MaterialScrim extends Backdrop {
  get [template]() {
    const result = super[template];
    result.content.append(html`
      <style>
        /* .mdc-drawer--modal+.mdc-drawer-scrim { */
        :host {
          background-color: rgba(0, 0, 0, 0.32);
        }
      </style>
    `);
    return result;
  }
}

export default MaterialScrim;
customElements.define("material-scrim", MaterialScrim);
