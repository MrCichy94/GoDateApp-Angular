import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Place} from '../../../services/currency-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit {

  place: Place;

  constructor(private currencyClientService: CurrencyClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.currencyClientService.getPlace(id)
      .subscribe(place => this.place = place);
  }
}
