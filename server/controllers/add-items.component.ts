import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  form_info = {
    item_name: '',
    condition: '',
    description: '',
    large_img: '',
    likes: 0,
    price: 0,
    sellers_name: '',
    small_pic: ''
  };

  color = 'red';

  name = this._cookieService.get('name');

  constructor(private _httpService: HttpService, private _cookieService: CookieService) {}

  ngOnInit() {
    console.log(this.name);
  }

  submitForm() {
    this._httpService.addInfo(this.form_info)

    .then((data) => {
      console.log('data is: ', data);
      this.form_info = {
        item_name: '',
        condition: '',
        description: '',
        large_img: '',
        likes: 0,
        price: 0,
        sellers_name: '',
        small_pic: ''
      };
    })
    .catch((err) => {
      console.log(err);
    });

    console.log('submitted the form');
  }

}
