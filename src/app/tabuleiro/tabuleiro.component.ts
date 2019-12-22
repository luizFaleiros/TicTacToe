import { Component, OnInit, Input } from "@angular/core";
import { Jogador } from "../jogador";
import { Casa } from "../casa";
@Component({
  selector: "app-tabuleiro",
  templateUrl: "./tabuleiro.component.html",
  styleUrls: ["./tabuleiro.component.css"]
})
export class TabuleiroComponent implements OnInit {
  casas: Casa[] = [];
  @Input() jogadores: Jogador[] = [];
  jogadorAtual: number = 0;
  vencedor: boolean = false;
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
  }
}
