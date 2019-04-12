import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelsService } from './hotels.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
  cardSettings: any = {
    theme: 'ios'
}

  items;
 

  constructor(private router: Router, private _hotelService : HotelsService) { }

  ngOnInit() {
    this.getItemsList();
  }


  getItemsList() {
    this._hotelService.getItemsList().subscribe((res:any)=>{
      this.items = res;
      console.log(this.items)
    });	
  }

  slideOpts= {
    loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    };
    slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay();
    }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 600);
  }


 

}
