import { CreateInsertComponent } from './pages/create-insert/create-insert.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewEmployeesComponent } from './pages/view-employees/view-employees.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'pages/create-insert', component: CreateInsertComponent},
  {path:'home',component:HomeComponent},
  {path:"viewEmployees",component:ViewEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
