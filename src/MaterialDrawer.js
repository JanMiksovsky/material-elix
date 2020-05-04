import Drawer from "../node_modules/elix/src/base/Drawer.js";
import {
  defaultState,
  ids,
  render,
  state,
} from "../node_modules/elix/src/base/internal.js";
import MaterialOverlayFrame from "./MaterialOverlayFrame.js";
import MaterialScrim from "./MaterialScrim.js";

class MaterialDrawer extends Drawer {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      backdropPartType: MaterialScrim,
      framePartType: MaterialOverlayFrame,
      drawerTransitionDuration: 200, // milliseconds
    });
  }

  [render](changed) {
    super[render](changed);
    // As the drawer opens (closes), transition the backdrop to fully
    // opaque (transparent).
    if (changed.openedFraction) {
      const {
        drawerTransitionDuration,
        openedFraction,
        openedRenderedFraction,
        showTransition,
      } = this[state];

      // The time required to show transitions depends on how far apart the
      // elements currently are from their desired state.
      const transitionFraction = Math.abs(
        openedFraction - openedRenderedFraction
      );
      const duration = showTransition
        ? transitionFraction * (drawerTransitionDuration / 1000)
        : 0;

      Object.assign(this[ids].backdrop.style, {
        opacity: openedFraction,
        transition: showTransition ? `opacity ${duration}s linear` : "",
      });
    }
  }
}

export default MaterialDrawer;
customElements.define("material-drawer", MaterialDrawer);
