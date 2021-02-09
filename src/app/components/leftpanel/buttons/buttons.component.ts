import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Place} from '../../../services/currency-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  places: Place[];
  city: string;

  constructor(
    private currencyClientService: CurrencyClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPlaceByCity();
  }

  getPlaceByCity(): void {
    this.city = this.route.snapshot.paramMap.get('city');
    this.currencyClientService.getPlaceByCityName(this.city)
      .subscribe(place => this.places = place);
  }
}
