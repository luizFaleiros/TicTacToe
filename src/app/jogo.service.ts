import { Casa } from "./casa";
import { Injectable } from "@angular/core";
import { Jogador } from "./jogador";

@Injectable({
  providedIn: "root"
})
export class JogoService {
  constructor() {}
  casas: Casa[] = [];
  jogadores: Jogador[] = [];
  vencedor: boolean;
  jogadorAtual: number = 0;
  IniciaJogo() {
    this.casas = [
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa(),
      new Casa()
    ];
  }
  reiniciaJogo() {
    for (let casa of this.casas) {
      casa.click = false;
      casa.valor = "";
    }
    this.vencedor = false;
    for (let i = 0; i < this.jogadores.length; i++) {
      for (let j = 0; j < this.jogadores[i].casas.length; j++) {
        const element = (this.jogadores[i].casas[j] = 0);
      }
    }
    console.log(this.jogadores);
    this.vencedor = false;
    this.jogadorAtual = 0;
  }
  reseTajogo() {
    this.reiniciaJogo();
    for (let jogador of this.jogadores) {
      jogador.vitoria = 0;
    }
  }
  setJogador(jogadores: Jogador[]) {
    this.jogadores = jogadores;
  }
}
