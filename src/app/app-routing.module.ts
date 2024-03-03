import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    pathMatch: 'full',
  },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'author-details/:key/:name',
    component: AuthorDetailsComponent,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
