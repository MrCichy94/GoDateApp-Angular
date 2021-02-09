import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PlaceComponent} from './components/place/place.component';
import {CommentComponent} from './components/place/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {PlacesComponent} from './components/places/places.component';
import {PageNotFoundComponent} from './components/errors/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { CoordinatesComponent } from './components/place/coordinates/coordinates.component';
import { LeftpanelComponent } from './components/leftpanel/leftpanel.component';
import { ButtonsComponent } from './components/leftpanel/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    CommentComponent,
    PlacesComponent,
    PageNotFoundComponent,
    CoordinatesComponent,
    LeftpanelComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
