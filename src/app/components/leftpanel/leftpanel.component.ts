import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Place} from '../../services/currency-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  cities: string[];

  constructor(
    private currencyClientService: CurrencyClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currencyClientService.getUniqueCity().subscribe(value => {
      this.cities = value;
    });
  }
}
