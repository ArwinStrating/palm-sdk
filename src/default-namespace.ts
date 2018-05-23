import {PalmNamespace} from './palm-namespace';

const palmApp = new PalmNamespace();

// Inject a circular default export to allow users to use both:
//
//   import palmApp from 'palm-sdk';
//   which becomes: var palmApp = require('palm-sdk').default;
//
// as well as the more correct:
//
//   import * as palmApp from 'palm-sdk';
//   which becomes: var palmApp = require('palm-sdk');
(palmApp as any).default = palmApp;

export = palmApp;

