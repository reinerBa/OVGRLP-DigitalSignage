import { NgModule, enableProdMode, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/de";
import { NxModule } from "@nrwl/nx";
import { ClarityModule } from "@clr/angular";

import { BackendModule } from "@ds-suite/backend";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { environment } from "../environments/environment";
import { DisplayComponent } from './display/display.component';
import { DisplayControlComponent } from './display-control/display-control.component';
import { TermineComponent } from './termine/termine.component';

import { AppConfig } from "@ds-suite/model";
import { DS_DISPLAYS_CONFIG } from "./app.config";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: ":name", component: DisplayComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: "enabled"
    }),
    ClarityModule,
    BackendModule
  ],
  providers: [
    {
      provide: AppConfig,
      useValue: DS_DISPLAYS_CONFIG
    },
    {
      provide: LOCALE_ID,
      useValue: "de"
    }
  ],
  declarations: [AppComponent, HomeComponent, DisplayComponent, DisplayControlComponent, TermineComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
