import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HotelsService } from '../hotels.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FacilitiesPage } from './facilities/facilities.page';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.page.html',
  styleUrls: ['./full-details.page.scss','../hotels.page.scss'],
})
export class FullDetailsPage implements OnInit {

  fieldid;
  fielddetails;
  constructor(private route: ActivatedRoute, private _hotelService : HotelsService, public modalController: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fieldid = params.get("id");
      this.getFulldescription(this.fieldid);
    })
  }

  getFulldescription(fieldid)
  {
    this._hotelService.getFieldDetails(fieldid).subscribe((res:any)=>{
      this.fielddetails = res;
      console.log(this.fielddetails)
    });	
  }

  slideOpts= {
    loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    };
    slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay();
    }


    async presentModal() {
      const modal = await this.modalController.create({
        component: FacilitiesPage,
        componentProps: { value: 123 }
      });
      return await modal.present();
    }

}
