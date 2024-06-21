import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloAngularComponent } from './hello-angular.component';

@NgModule({
  declarations: [HelloAngularComponent],
  imports: [BrowserModule],
  bootstrap: [HelloAngularComponent],
})
export class AppModule {}
