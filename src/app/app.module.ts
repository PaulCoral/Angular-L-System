import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LSystemCanvasComponent } from './l-system/l-system-canvas/l-system-canvas.component';
import { LSystemFormComponent } from './l-system/l-system-form/l-system-form.component';
import { LSystemComponent } from './l-system/l-system.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LSystemCanvasComponent,
    LSystemFormComponent,
    LSystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
