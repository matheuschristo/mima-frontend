import { Router } from '@angular/router';
import { EstacaoService } from 'src/app/services/estacao.service';
import { EstacaoModel} from './../../models/estacaoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-medicao',
  templateUrl: './start-medicao.component.html',
  styleUrls: ['./start-medicao.component.css']
})
export class StartMedicaoComponent implements OnInit {

  estacoes: Array<EstacaoModel> = []

  constructor(
    private estacaoService: EstacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllEstacao()
  }

  getAllEstacao() {
    this.estacaoService.getAllEstacao().subscribe((data: any) => {
      this.estacoes = data
    })
  }

  startMedicao(id: number) {
    this.router.navigate(['/create-medicao/'+ id])
  }

}
