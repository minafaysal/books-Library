import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bookDetails', component: BookDetailsComponent },
  { path: 'authorDetails', component: AuthorDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
