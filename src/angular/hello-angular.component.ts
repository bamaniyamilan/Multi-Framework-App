import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello from Angular</h1>`,
})
export class HelloAngularComponent {
  constructor() {
    // Ensure the constructor is empty if there are no dependencies
  }
}
