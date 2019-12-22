import { Injectable } from '@angular/core';
import { Jogador } from './jogador';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jogador: Jogador[] = [];
  constructor() { }
  setJogador(jogador: Jogador[]) {
    this.jogador = jogador;
  }
  getJogador(){
    return this.jogador;
  }
}
