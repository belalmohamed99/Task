import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText: string = '';
  displayedText: string = '';

  saveText(): void {
    this.displayedText = this.inputText;
  }

  clearText(): void {
    this.inputText = '';
    this.displayedText = '';
  }
}
