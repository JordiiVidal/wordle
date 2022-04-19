import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoopNumberPipe } from './loop-number/loop-number.pipe';



@NgModule({
  declarations: [
    LoopNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoopNumberPipe
  ]
})
export class PipesModule { }
