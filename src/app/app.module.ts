import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestcomponentComponent } from "./components/testcomponent/testcomponent.component";
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./NGRXstore/reducers/reducers";

@NgModule({
  declarations: [AppComponent, TestcomponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    JwtModule.forRoot({
      config: {}
    })
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
