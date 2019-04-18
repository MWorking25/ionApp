import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels/hotels.service';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss','../hotels/hotels.page.scss'],
})
export class DescriptionPage implements OnInit {

  fieldid;
  fielddetails;
  constructor(private route: ActivatedRoute, private _hotelService : HotelsService) { }

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


}
