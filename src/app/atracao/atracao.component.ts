import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atracao',
  templateUrl: './atracao.component.html',
  styleUrls: ['./atracao.component.css']
})
export class AtracaoComponent implements OnInit {
  estacao: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.estacao = this.route.snapshot.paramMap.get('nome');
  }

}
