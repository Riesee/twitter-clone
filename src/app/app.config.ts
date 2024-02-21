import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';


import { environment } from '../environments/environments';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),importProvidersFrom([
    AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig), BrowserModule, AngularFireStorageModule, 
    AngularFireDatabaseModule
  ])],
};
