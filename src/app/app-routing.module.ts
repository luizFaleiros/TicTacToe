import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogoComponent } from './jogo/jogo.component';
import { FormJogoComponent } from './form-jogo/form-jogo.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {path: '', component:FormJogoComponent},
  {path: 'jogo', component:JogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
