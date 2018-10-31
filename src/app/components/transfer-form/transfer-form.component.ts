import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  subs = ['Basic', 'Advanced', 'Pro'];
  // patron = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  patron = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8}$';
  formaInicial = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  // enviar() {
  //   this.router.navigate(['/success']);
  //   console.log(this.formaInicial.value);
  // }

  enviar = () => {
    // this.router.navigate(['/success']);
    console.log(this.formaInicial.value);
  }

  // onSubmit(formValue: any) {
  //   console.log(formValue);
  // }

  onSubmit = (formValue: any) => {
    console.log(formValue);
  }

  resetear() {
    if (this.formaInicial.touched) {
      if (confirm('Are you sure to delete the inputs?')) {
        this.formaInicial.reset();
      }
    } else {
      console.log('Form hasn\'t been used');
    }
  }

}
