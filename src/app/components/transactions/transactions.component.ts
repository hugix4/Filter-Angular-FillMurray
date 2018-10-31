import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
// import { FiltroPipe } from '../../pipes/filtro.pipe';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    private data: DataService,
    private formbuilder: FormBuilder
  ) { }
  public d1: any = [];
  ngOnInit() {
    this.data.bringData().subscribe(datos => {
      // console.log(datos);
      this.d1 = datos['People'];
      console.log(this.d1);
    });

    this.searchForm = this.formbuilder.group({
      search: ['', Validators.required]
    });

  }

  message1(name) {
    alert('Hey, this is ' + name + '. \nThanks for your message');
  }
  // dateOrder() {
  //   alert('Hola');
  // }

  // const dateOrder = () => {
  //   alert('Hola');
  // });

}