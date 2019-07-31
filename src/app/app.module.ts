import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BasicHightlightDirective} from './basic-hightlight/basic-hightlight.directive';
import { BetterHighlightDirective } from './better-hightlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
