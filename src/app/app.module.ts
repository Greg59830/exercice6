import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { CamelPipe, TrimPipe } from './exercice/my-pipes.pipe';

@NgModule({
  declarations: [
    CamelPipe,
    TrimPipe,
    AppComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
