import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormJogoComponent } from './form-jogo/form-jogo.component';
import { JogoComponent } from './jogo/jogo.component';
import { PlacarComponent } from './placar/placar.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { CasaComponent } from './casa/casa.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormJogoComponent,
    JogoComponent,
    PlacarComponent,
    TabuleiroComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
