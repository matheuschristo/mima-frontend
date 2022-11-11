import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-medicao',
  templateUrl: './create-medicao.component.html',
  styleUrls: ['./create-medicao.component.css']
})
export class CreateMedicaoComponent implements OnInit {

  txt: File = new File(["foo"], "foo.txt", { type: "text/plain", })

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

  public onFileSelected(event: any) {
    this.txt = event.target.files[0]
    console.log(this.txt);
  }

}
