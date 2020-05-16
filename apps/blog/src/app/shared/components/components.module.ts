import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
