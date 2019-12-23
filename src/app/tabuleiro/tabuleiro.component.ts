import { JogoService } from './../jogo.service';
import { Jogador } from './../jogador';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Casa } from '../casa';
@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit{
  casas: Casa[] = [];
  @Input() jogo:JogoService;
  @Output() qmVenceu = new EventEmitter<number>();
  @Output() terminou = new EventEmitter();
  @Output() reiniciado = new EventEmitter();
  @Output() resetado = new EventEmitter();
  jogadorAtual = 0;
  vencedor = false;
  constructor() {
  }

  ngOnInit() {
    this.jogo.IniciaJogo();
    if (!this.jogo.jogadores[0].nome) {
      this.jogo.jogadores[0].nome = 'Xizinho';
    }
    if (!this.jogo.jogadores[1].nome) {
      this.jogo.jogadores[1].nome = 'Bolinha';
    }
  }
  troca(index) {
    this.jogo.jogadores[this.jogo.jogadorAtual].casas[index] = 1;
    this.terminaJogo(this.VerVencedor());
    if (this.jogo.jogadorAtual === 0) {
      this.jogo.jogadorAtual = 1;
    } else {
      this.jogo.jogadorAtual = 0;
    }
    if (!this.jogo.vencedor) {
      this.qmVenceu.emit(this.jogo.jogadorAtual);
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
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i],
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i + 1],
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i + 2]
        )
      ) {
        return 1;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.testeVencedor(
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i],
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i + 3],
          this.jogo.jogadores[this.jogo.jogadorAtual].casas[i + 6]
        )
      ) {
        return 1;
      }
    }
    if (
      this.testeVencedor(
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[0],
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[4],
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[8]
      )
    ) {
      return 1;
    }
    if (
      this.testeVencedor(
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[2],
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[4],
        this.jogo.jogadores[this.jogo.jogadorAtual].casas[6]
      )
    ) {
      return 1;
    }
    let soma = 0;
    for (let i = 0; i <= 9; i++) {
      if (i < 9) {
        soma += this.jogo.jogadores[0].casas[i] + this.jogo.jogadores[1].casas[i];
      }
    }
    if (soma === 9) {
      this.jogo.jogadorAtual = 2;
      return 1;
    }
    return 0;
  }
  terminaJogo(vencedor) {
    if (vencedor === 1) {
      this.jogo.jogadores[this.jogo.jogadorAtual].vitoria += 1;
      this.jogo.vencedor = true;
      this.terminou.emit(this.jogo.vencedor);
      this.qmVenceu.emit(this.jogo.jogadorAtual);
      console.log(this.jogo.jogadores[this.jogo.jogadorAtual].nome);
    }
  }
}
