import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './layout/home-routing.module';
import { BoardComponent } from '../../features/board/board.component';
import { HomeComponent } from './layout/home.component';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
