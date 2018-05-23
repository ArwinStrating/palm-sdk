import { PalmApp, FirebaseAppOptions } from "./palm-app";

/**
 * Internals of a PalmNamespace instance.
 */
export class PalmNamespaceInternals {

    constructor() {}
  
    /**
     * Initializes the FirebaseApp instance.
     *
     * @param {FirebaseAppOptions} options Optional options for the FirebaseApp instance. If none present
     *                             will try to initialize from the FIREBASE_CONFIG environment variable.
     *                             If the environmet variable contains a string that starts with '{'
     *                             it will be parsed as JSON,
     *                             otherwise it will be assumed to be pointing to a file.
     * @param {string} [appName] Optional name of the FirebaseApp instance.
     *
     * @return {FirebaseApp} A new FirebaseApp instance.
     */
    public initializeApp(options?: FirebaseAppOptions): PalmApp {
      if (typeof options === 'undefined') {
        console.log('firebase options undefined')
      }
  
      const app = new PalmApp(options);
  
      return app;
    }
}

export class PalmNamespace {

    public INTERNAL: PalmNamespaceInternals;
  
    constructor() {
      this.INTERNAL = new PalmNamespaceInternals();
    }

    /**
   * Initializes the PalmApp instance.
   *
   * @param {FirebaseAppOptions} [options] Optional options for the PalmApp instance.
   *
   * @return {PalmApp} A new PalmApp instance.
   */
  public initializeApp(options?: FirebaseAppOptions): PalmApp {
    return this.INTERNAL.initializeApp(options);
  }
}