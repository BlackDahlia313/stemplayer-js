/**
 * Copyright (C) 2019-2023 First Coders LTD
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import { LitElement } from 'lit';
import onResize from './lib/on-resize.js';
import { responsiveBreakpoints } from './config.js';

export class ResponsiveLitElement extends LitElement {
  static get properties() {
    return {
      /**
       * The displayMode determines normal or small screen rendering
       */
      displayMode: { type: String },
    };
  }

  constructor() {
    super();
    this.displayMode = 'lg';
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.onResizeCallback = onResize(this.shadowRoot.firstElementChild, () =>
        this.recalculateDisplayMode(),
      );
    }, 0);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onResizeCallback?.un();
  }

  recalculateDisplayMode() {
    const { xs, sm } = responsiveBreakpoints;

    let size = 'lg';

    if (this.clientWidth < sm) size = 'sm';
    if (this.clientWidth < xs) size = 'xs';

    this.displayMode = size;
  }
}
