import { Component, OnInit } from '@angular/core';
import { Jogador } from '../jogador';
import { DataService } from "../data.service";
import { Data } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-jogo',
  templateUrl: './form-jogo.component.html',
  styleUrls: ['./form-jogo.component.css']
})

export class FormJogoComponent implements OnInit {
  jogador:Jogador[] = [];


  constructor(private  dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.jogador = [new Jogador,new Jogador,new Jogador];
    this.jogador[2].nome = 'Empate';
  }
  inicio(){
    this.jogador[0].jogada = 'X';
    this.jogador[1].jogada = 'O';
    this.dataService.setJogador(this.jogador);
    this.router.navigateByUrl('/jogo',{
      state: {jogadores:this.jogador}
    });
  }

}
