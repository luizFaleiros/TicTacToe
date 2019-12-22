import { Jogador } from './../jogador';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit {
  @Input() index: number;
  @Input() jogadores: Jogador[];
  @Input() termina: boolean;

  constructor() {}

  ngOnInit() {
    this.index = 0;
    this.termina = false;
  }
  fechar() {
    this.termina = false;
  }
}
