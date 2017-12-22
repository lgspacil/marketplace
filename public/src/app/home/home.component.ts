import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  card_info = null;
  stars = [1, 2, 3, 4, 5];
  show_x = false;
  item_name = {
    letters: ''
  };


  constructor(private _cookieService: CookieService, private _httpService: HttpService) { }

  ngOnInit() {
    this.loadAllCards();
    this._cookieService.put('name', 'lucas');
  }

  search() {
    if (this.item_name.letters === '') {
      return this.loadAllCards();
    }
    this._httpService.findOne(this.item_name)
    .then((data) => {
      console.log('the data is: ', data);
      this.card_info = data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  toggleDeleteItems() {
    if (this.show_x === false) {
      this.show_x = true;
    } else {
      this.show_x = false;
    }
  }

  mouseOver(s) {
    console.log('mouse went over', s);
    const num = s;

    // document.getElementById('1').style.color = 'yellow';

    for (let i = 1; i <= num; i++) {
      const str = i.toString();

      document.getElementById(str).style.color = 'yellow';
    }
  }

  deletethis(card) {
    this._httpService.deletethis(card)

    .then((data) => {
      console.log(data);
      if (data === true) {
        this.loadAllCards();
      }
    })
    .catch((err) => {
      console.log('there was an error deleting the item');
    });
  }

  likeButtonClicked(card) {
    console.log('you cliked me', card);
    this._httpService.addLike(card)
    .then((data) => {
      this.loadAllCards();
    })
    .catch((err) => {
      console.log('there was an error');
    });
  }

  loadAllCards() {
    this._httpService.loadCards()
    .then((data) => {
      this.card_info = data;
    })

    .catch((err) => {
      console.log(err);
    });
  }

}
