import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  signInFormDisplayIsActive = true;

  constructor() {}

  ngOnInit(): void {}

  changeDisplayAuthView() {
    this.signInFormDisplayIsActive
      ? (this.signInFormDisplayIsActive = false)
      : (this.signInFormDisplayIsActive = true);
  }
}
