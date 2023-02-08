import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'weather-app';
  checked!: boolean;
  autoRenew= new FormControl();
  onChange(): void{
    this.checked = this.autoRenew.value;
    console.log(this.checked);
    console.log(this.autoRenew.value);
  }
}
