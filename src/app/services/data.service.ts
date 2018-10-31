import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Transfer } from './data';
// import { Observable } from 'rxjs';
// import { Observable } from ''

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url = 'src/app/components/transactions/transactions.json';
  constructor(private http: HttpClient) { }

  bringData() {
    // return this.http.get('src/app/components/transactions/transactions.json').subscribe(
    //   (data) => console.log(JSON.stringify(data))
    // );

    return this.http.get(this._url);

    /*.map(
          (response) => response.json()
        ) */

  }
}
