// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyD77rgtXaV8aqaXC6RYti-UA2ITV1Unp2Y",
      authDomain: "ecommerce-1252c.firebaseapp.com",
      projectId: "ecommerce-1252c",
      storageBucket: "ecommerce-1252c.appspot.com",
      messagingSenderId: "509015544749",
      appId: "1:509015544749:web:769db02e13328f2b0b8724"
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
