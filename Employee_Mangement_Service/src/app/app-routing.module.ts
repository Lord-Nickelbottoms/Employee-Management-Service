import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateInsertComponent } from './pages/create-insert/create-insert.component';

const routes: Routes = [
  { path: '', component: CreateInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
