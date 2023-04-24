import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateInsertComponent } from './pages/create-insert/create-insert.component';
<<<<<<< HEAD
import { ViewSingleEmpComponent } from './pages/view-single-emp/view-single-emp.component';
import { EditComponent } from './pages/edit/edit.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
=======
import { WelcomeMessageComponent } from './component/welcome-message/welcome-message.component';
import { AdminpicComponent } from './component/adminpic/adminpic.component';
>>>>>>> NyikoSec

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CreateInsertComponent,
<<<<<<< HEAD
    ViewSingleEmpComponent,
    EditComponent,
    ViewAllEmpComponent,
=======
    WelcomeMessageComponent,
    AdminpicComponent
>>>>>>> NyikoSec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
