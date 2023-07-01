import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { ROUTES } from "./app/app-routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES), importProvidersFrom(BrowserAnimationsModule)],
});
