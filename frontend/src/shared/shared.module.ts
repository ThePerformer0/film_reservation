import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { YoutubeUrlPipe } from './pipes/youtube-url.pipe';

@NgModule({
  declarations: [
    SafePipe,
    YoutubeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    YoutubeUrlPipe
  ]
})
export class SharedModule { }
