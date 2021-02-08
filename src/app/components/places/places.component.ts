import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Place} from '../../services/currency-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  constructor(
    private currencyClientService: CurrencyClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currencyClientService.getCurrencyPlaces().subscribe(value => {
      this.places = value;
    });
  }
}
