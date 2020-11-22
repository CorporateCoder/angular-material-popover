import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularMaterialUiModule} from './modules/angular-material-ui/angular-material-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
