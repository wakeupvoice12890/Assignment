import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EpCardComponent } from "./ep-card/ep-card.component";
import { EpInputComponent } from "./ep-input/ep-input.component";
import { BaseComponent } from "./base/base.component";

@NgModule({
  declarations: [
    AppComponent,
    EpCardComponent,
    EpInputComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
