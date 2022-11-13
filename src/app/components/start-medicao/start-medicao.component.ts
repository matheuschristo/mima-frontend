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

  searchNome: string = ""

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

  getEstacaoByNome() {

    if (this.searchNome == ""){
      this.getAllEstacao()
      return false
    }
      
    this.estacaoService.getEstacaoByNome(this.searchNome).subscribe((data: any) => {
      this.estacoes = data
    })
    return true
  }

  startMedicao(id: number) {
    this.router.navigate(['/create-medicao/'+ id])
  }

}
