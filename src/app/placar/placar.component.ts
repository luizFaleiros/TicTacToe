import { Jogador } from './../jogador';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit {
  @Input() jogo:JogoService;
  @Input() index: number;
  @Input() termina: boolean;

  constructor() {}

  ngOnInit() {
    this.index = 0;
    this.termina = false;
  }
  fechar() {
    this.termina = false;
  }
  reinicia(){
    this.jogo.reiniciaJogo();
  }
}
