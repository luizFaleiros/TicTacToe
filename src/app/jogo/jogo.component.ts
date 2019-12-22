import { Jogador } from './../jogador';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, Navigation } from '@angular/router';
@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  jogadores: Jogador[];
  qmVenceu = 0;
  termina = false;
  reseta = false;
  reinicia = false;
  constructor(private dataService: DataService, private router: Router) {

    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state) {
      this.jogadores = nav.extras.state.jogadores;
    }else{
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {

  }

  venceu(event) {
    this.qmVenceu = event;
  }
  terminaJogo(event) {
    console.warn(event);
    this.termina = event;
  }
  resetar(event){
    this.reseta = event;
  }
  reiniciar(event){
    this.reinicia = event;
  }
}
