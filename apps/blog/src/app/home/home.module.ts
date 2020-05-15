import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [HomePageComponent, AboutComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
