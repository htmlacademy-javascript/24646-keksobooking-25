import {showCard} from './card.js';
import {createAd} from './data.js';

import {
  enableActiveState,
  enableInactiveState
} from './form.js';

const RESULT = createAd();
showCard(RESULT);

enableInactiveState();
enableActiveState();
