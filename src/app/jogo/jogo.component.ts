import { Component, OnInit } from '@angular/core';
import { Jogador } from "../jogador";
import { DataService } from "../data.service";
import { Router, Navigation } from "@angular/router";
import { Casa } from "../casa";

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  jogadores:Jogador[];
  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.jogadores = nav.extras.state.jogadores;
  }

  ngOnInit() {
    this.jogadores = this.dataService.getJogador();
    console.log(this.jogadores);
  }

}
