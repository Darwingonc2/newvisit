import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';

import {ArchwizardModule} from 'angular-archwizard';

import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import {PreloaderComponent} from './components/common/preloader/preloader.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistrarComponent,
        PreloaderComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgSelectModule,
        ArchwizardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
