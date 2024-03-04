import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, WarningComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [HeaderComponent, NotFoundComponent],
})
export class SharedModule {}
