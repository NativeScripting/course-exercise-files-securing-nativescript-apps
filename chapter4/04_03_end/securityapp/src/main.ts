// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { knownFolders } from 'tns-core-modules/file-system';
import * as Https from 'nativescript-https';

const dir = knownFolders.currentApp().getFolder('certs');
const certificate = dir.getFile('localhost.cer').path;
Https.enableSSLPinning({
    host: 'https://192.168.1.243:8443',
    certificate: certificate,
    allowInvalidCertificates: true,
    validatesDomainName: false
});

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
