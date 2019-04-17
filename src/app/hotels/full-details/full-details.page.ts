import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { HotelsService } from '../hotels.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.page.html',
  styleUrls: ['./full-details.page.scss','../hotels.page.scss'],
})
export class FullDetailsPage implements OnInit {

  fieldid;
  fielddetails;
  constructor(private route: ActivatedRoute, private router: Router, private _hotelService : HotelsService) { }

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
    });	
  }

  slideOpts= {
    loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    };
    slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay();
    }

    facilities()
    {
      this.router.navigate(['/facilitiestry',{item:this.fieldid}])
    } 
}
