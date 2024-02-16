import '@soundws/loader-element/soundws-loader.js';
import '@soundws/mask-element/soundws-mask.js';
import '@soundws/player-button-element/soundws-player-button.js';
import '@soundws/slider-element/soundws-slider.js';
import '@soundws/range-element/soundws-range.js';
import '@soundws/waveform-element/soundws-waveform.js';
import { SoundwsStemPlayer } from './src/StemPlayer.js';
import { SoundwsStemPlayerControls } from './src/StemPlayerControls.js';
import { SoundwsStemPlayerStem } from './src/StemPlayerStem.js';

export { default as config } from './src/config.js';

window.customElements.define('soundws-stem-player', SoundwsStemPlayer);
window.customElements.define(
  'soundws-stem-player-controls',
  SoundwsStemPlayerControls,
);
window.customElements.define('soundws-stem', SoundwsStemPlayerStem);
