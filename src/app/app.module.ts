import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { GodModule } from './god/god.module';
import { MaterialModule } from './material/material.module';
import { AuthService } from './services/auth/auth.service';
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { GodLayoutComponent } from './layouts/god-layout/god-layout.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    GodLayoutComponent,
    DashLayoutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AuthentificationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GodModule,
    DashboardModule
  ],
  exports:[
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService,multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
