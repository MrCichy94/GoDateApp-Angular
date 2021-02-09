import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlaceComponent} from '../components/place/place.component';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getPlace(id: number): Observable<Place> {
    return this.httpClient.get<Place>('http://localhost:8080/places/' + id);
  }

  public getPlaceByCityName(city: string): Observable<Place[]>{
    return this.httpClient.get<Place[]>('http://localhost:8080/places/pl/' + city);
  }

  public getUniqueCity(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/places/unique');
  }

  public getCurrencyPlaces(): Observable<Place[]> {
    return this.httpClient.get<Place[]>('http://localhost:8080/places?sort=rate,desc&page=0&size=3');
  }
}

export interface Coordinates {
  id: number;
  coordinate_X: number;
  coordinate_Y: number;
}

export interface Comment {
  id: number;
  place_id: number;
  commentDataTime: Date;
  nickName: string;
  commentText: string;
  userRate: number;
}

export interface Place {
  id: number;
  placeName: string;
  description: string;
  city: string;
  adress: string;
  rate: number;
  coordinates: Coordinates;
  comments: Comment[];
}





