import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','home.style.less'],
})
export class HomePage {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  forgotpassword()
  {
    this.router.navigate(['/forgetpassword'])
  }

  signup()
  {
    this.router.navigate(['/signup'])
  }

}
