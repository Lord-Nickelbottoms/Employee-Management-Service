import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { CreateInsertComponent } from './pages/create-insert/create-insert.component';

const routes: Routes = [
  { path:"", component:FooterComponent },
  { path: "pages/create-insert",component: CreateInsertComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
