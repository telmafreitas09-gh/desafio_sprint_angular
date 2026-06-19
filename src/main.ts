import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Mude aqui para AppComponent caso esteja 'App'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  