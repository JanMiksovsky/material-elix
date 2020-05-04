import { template } from "../node_modules/elix/src/base/internal.js";
import OverlayFrame from "../node_modules/elix/src/base/OverlayFrame.js";
import html from "../node_modules/elix/src/core/html.js";

class MaterialOverlayFrame extends OverlayFrame {
  get [template]() {
    const result = super[template];
    result.content.append(html`
      <style>
        :host {
          display: -ms-flexbox;
          display: flex;
        }

        /* .mdc-drawer { */
        :host {
          border-color: rgba(0, 0, 0, 0.12);
          background-color: #fff;
          border-radius: 0 0 0 0;
          z-index: 6;
          width: 256px;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 100%;
          border-right-width: 1px;
          border-right-style: solid;
          overflow: hidden;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* .mdc-drawer--modal { */
        :host {
          -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
            0 16px 24px 2px rgba(0, 0, 0, 0.14),
            0 6px 30px 5px rgba(0, 0, 0, 0.12);
          box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
            0 16px 24px 2px rgba(0, 0, 0, 0.14),
            0 6px 30px 5px rgba(0, 0, 0, 0.12);
          left: 0;
          right: auto;
          display: none;
          position: fixed;
        }
      </style>
    `);
    return result;
  }
}

export default MaterialOverlayFrame;
customElements.define("material-overlay-frame", MaterialOverlayFrame);
