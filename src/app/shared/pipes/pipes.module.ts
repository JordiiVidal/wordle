import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoopNumberPipe } from './loop-number/loop-number.pipe';
import { LoopWordPipe } from './loop-word/loop-word.pipe';



@NgModule({
  declarations: [
    LoopNumberPipe,
    LoopWordPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoopNumberPipe,
    LoopWordPipe
  ]
})
export class PipesModule { }
