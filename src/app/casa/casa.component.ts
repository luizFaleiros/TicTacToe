import { Casa } from "./../casa";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-casa",
  templateUrl: "./casa.component.html",
  styleUrls: ["./casa.component.css"]
})
export class CasaComponent implements OnInit {
  @Input() casa: Casa;
  @Input() jogada: string;
  @Input() vencedor: boolean;
  @Output() clicado = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  muda() {
    if (this.casa.click) {
      return;
    }
    if (this.vencedor) {
      return;
    }
    this.casa.click = true;
    this.casa.valor = this.jogada;
    this.clicado.emit(this.casa.click);
  }
}
