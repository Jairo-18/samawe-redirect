import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div
      style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;"
    >
      <h1>Redirigiendo a ecohotelsamawe.com...</h1>
    </div>
  `,
  styles: [],
})
export class App {
  constructor() {
    window.location.href = 'https://ecohotelsamawe.com';
  }
}
