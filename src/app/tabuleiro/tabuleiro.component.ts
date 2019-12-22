import { Jogador } from './../jogador';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Casa } from "../casa";
@Component({
  selector: "app-tabuleiro",
  templateUrl: "./tabuleiro.component.html",
  styleUrls: ["./tabuleiro.component.css"]
})
export class TabuleiroComponent implements OnInit {
  casas: Casa[] = [];
  @Input() jogadores: Jogador[] = [];
  @Input() reseta = false;
  @Input() reinicia = false;
  @Output() qmVenceu = new EventEmitter<number>();
  @Output() terminou = new EventEmitter();
  jogadorAtual = 0;
  vencedor = false;
  constructor() {}

  ngOnInit() {
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
    if (!this.jogadores[0].nome) {
      this.jogadores[0].nome = "Xizinho";
    }
    if (!this.jogadores[1].nome) {
      this.jogadores[1].nome = "Bolinha";
    }
  }
  troca(index) {
    this.jogadores[this.jogadorAtual].casas[index] = 1;
    this.terminaJogo(this.VerVencedor());
    if (this.jogadorAtual === 0) {
      this.jogadorAtual = 1;
    } else {
      this.jogadorAtual = 0;
    }
    if (!this.vencedor) {
      this.qmVenceu.emit(this.jogadorAtual);
    }
  }
  testeVencedor(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
      return 0;
    }
    if (a + b + c === 3) {
      return 1;
    } else {
      return 0;
    }
  }
  VerVencedor() {
    for (let i = 0; i < 9; i += 3) {
      if (
        this.testeVencedor(
          this.jogadores[this.jogadorAtual].casas[i],
          this.jogadores[this.jogadorAtual].casas[i + 1],
          this.jogadores[this.jogadorAtual].casas[i + 2]
        )
      ) {
        return 1;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.testeVencedor(
          this.jogadores[this.jogadorAtual].casas[i],
          this.jogadores[this.jogadorAtual].casas[i + 3],
          this.jogadores[this.jogadorAtual].casas[i + 6]
        )
      ) {
        return 1;
      }
    }
    if (
      this.testeVencedor(
        this.jogadores[this.jogadorAtual].casas[0],
        this.jogadores[this.jogadorAtual].casas[4],
        this.jogadores[this.jogadorAtual].casas[8]
      )
    ) {
      return 1;
    }
    if (
      this.testeVencedor(
        this.jogadores[this.jogadorAtual].casas[2],
        this.jogadores[this.jogadorAtual].casas[4],
        this.jogadores[this.jogadorAtual].casas[6]
      )
    ) {
      return 1;
    }
    let soma = 0;
    for (let i = 0; i <= 9; i++) {
      if (i < 9) {
        soma += this.jogadores[0].casas[i] + this.jogadores[1].casas[i];
      }
    }
    if (soma === 9) {
      this.jogadorAtual = 2;
      return 1;
    }
    return 0;
  }
  terminaJogo(vencedor) {
    if (vencedor === 1) {
      this.jogadores[this.jogadorAtual].vitoria += 1;
      this.vencedor = true;
      this.terminou.emit(this.vencedor);
      console.log(this.jogadores[this.jogadorAtual].nome);
    }
  }
}
