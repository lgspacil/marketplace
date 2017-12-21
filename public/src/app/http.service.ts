import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  addInfo(form_info) {
    return this._http.post('/add_item', form_info).map(data => data.json()).toPromise();
  }

  loadCards() {
    return this._http.get('/get_cards').map(data => data.json()).toPromise();
  }

  addLike(card) {
    return this._http.post('/add_like', card).map(data => data.json()).toPromise();
  }

}
