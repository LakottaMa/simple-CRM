import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-47700","appId":"1:365843941040:web:c6eaab1a860de702335d75","storageBucket":"simple-crm-47700.appspot.com","apiKey":"AIzaSyBSysvV4Uzi9ZhAPuFjmcgEsKyfDcQnw_Q","authDomain":"simple-crm-47700.firebaseapp.com","messagingSenderId":"365843941040"})), provideFirestore(() => getFirestore())]
};
