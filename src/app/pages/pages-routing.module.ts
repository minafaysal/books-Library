import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
