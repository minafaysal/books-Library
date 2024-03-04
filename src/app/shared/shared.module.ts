import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [HeaderComponent, NotFoundComponent],
})
export class SharedModule {}
