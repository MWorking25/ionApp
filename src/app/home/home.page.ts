import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','home.style.less'],
})
export class HomePage {

  constructor(public router: Router, public googlePlus: GooglePlus) { }

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

  async doGoogleLogin(){

  
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '845071957408-r972ktpie7b67krv50r8a7s7sqofb52p.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
    .then(user =>{
     
      alert(JSON.stringify(user));
  
      // this.nativeStorage.setItem('google_user', {
      //   name: user.displayName,
      //   email: user.email,
      //   picture: user.imageUrl
      // })
      // .then(() =>{
      //   this.router.navigate(["/user"]);
      // }, error =>{
      //   console.log(error);
      // })
      // loading.dismiss();
    }, err =>{
      alert(JSON.stringify({err:err}));
    });

  }

  


}
