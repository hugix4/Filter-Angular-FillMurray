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
  mockLocal = {
    "People": [
      {
        "name": "Andrew Amernante",
        "rating": 3,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "name": "Frank Wang",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/201",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of anelizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
      },
      {
        "name": "Sissi Chen",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/202",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of all life's problems.",
        "Likes": [
          "Cats",
          "the beach",
          "Chopin",
          "Blue things"
        ],
        "Dislikes": [
          "Birds"
        ]
      },
      {
        "name": "Diego Garcia",
        "rating": 2,
        "img": "http://www.fillmurray.com/200/204",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go­cart, powered by my ownsense of self­satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
      },
      {
        "name": "Fuad Rashid",
        "rating": 4,
        "img": "http://www.fillmurray.com/200/206",
        "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      }
    ]
  };

  ngOnInit() {
    this.data.bringData().subscribe(datos => {
      console.log("Datos: ");
      console.log(this.mockLocal);
      // console.log(datos);
      //      const datos2 = JSON.parse(datos);
      const datos2 = this.mockLocal;
      console.log("Datos2: ");
      console.log(datos2);
      this.d1 = datos2['People'];
      // this.d1 = this.mockLocal;
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
