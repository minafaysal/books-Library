import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { WhishlistPageComponent } from './whishlist-page/whishlist-page.component';

@NgModule({
  declarations: [
    WhishlistPageComponent
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
