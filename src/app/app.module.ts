import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HomeComponent, ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
