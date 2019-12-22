import { Jogador } from './../jogador';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, Navigation } from '@angular/router';
import { Casa } from '../casa';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  jogadores: Jogador[];
  qmVenceu = 0;
  termina = false;
  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.jogadores = nav.extras.state.jogadores;
  }

  ngOnInit() {
    this.jogadores = this.dataService.getJogador();
  }

  venceu(event) {
    this.qmVenceu = event;
  }
  terminaJogo(event) {
    console.warn(event);
    this.termina = event;
  }
}
