import {Component, OnInit} from '@angular/core';
import {CurrencyClientService, Place} from './services/currency-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoDateApp-Angular';
}

