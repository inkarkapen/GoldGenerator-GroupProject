import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NinjaComponent } from './ninja/ninja.component';
import { HttpService } from './http.service';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NinjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
