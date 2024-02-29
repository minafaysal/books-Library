import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
