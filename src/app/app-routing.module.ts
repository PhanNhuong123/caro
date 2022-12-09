import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquareComponent } from './components/square/square.component';

const routes: Routes = [
  {path:'play', component: SquareComponent},
  {path: '**' , redirectTo:'play'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
