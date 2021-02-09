import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlacesComponent} from './components/places/places.component';
import {PlaceComponent} from './components/place/place.component';
import {CommentComponent} from './components/place/comment/comment.component';
import {PageNotFoundComponent} from './components/errors/page-not-found/page-not-found.component';
import {ButtonsComponent} from './components/leftpanel/buttons/buttons.component';

const routes: Routes = [
  {path: 'places', component: PlacesComponent},
  {path: 'places/:id', component: PlaceComponent},
  {path: 'places/pl/:city', component: ButtonsComponent},
  {path: 'comment', component: CommentComponent},
  {path: '', redirectTo: '/places', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
