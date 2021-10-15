import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
// import {ProductsModule} from './products/products.module'

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, WelcomeComponent, LoginComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
