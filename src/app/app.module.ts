import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { CeltofarhrenpipePipe } from './celtofarhrenpipe.pipe';
import { ComCommunicationComponent } from './com-communication/com-communication.component';
import { ParentChildExComponent } from './parent-child-ex/parent-child-ex.component';
import { FormExampleComponent } from './form-example/form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeComponent,
    CeltofarhrenpipePipe,
    ComCommunicationComponent,
    ParentChildExComponent,
    FormExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
