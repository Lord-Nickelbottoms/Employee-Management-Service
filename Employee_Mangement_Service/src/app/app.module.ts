import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateInsertComponent } from './pages/create-insert/create-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
=======
    NavbarComponent,
    HomeComponent,
    CreateInsertComponent,
>>>>>>> cbe4daf29c19b4a48ef7f055beeed9ad53a7ac78
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
