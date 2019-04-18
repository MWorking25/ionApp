import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-facilitiestry',
  templateUrl: './facilitiestry.page.html',
  styleUrls: ['./facilitiestry.page.scss'],
})
export class FacilitiestryPage implements OnInit {
  fieldid:any;
  amenities:any = [{icon:'bed',header:'Dining',subheader:['Restaurant','Bar']},
  {icon:'wifi',header:'Internet',subheader:['Free Wifi']},
  {icon:'wine',header:'Fun',subheader:['Swimming Pool','DJ Night','Amusement Park']},
  {icon:'bed',header:'Housekeeping',subheader:['Laundry']},
  {icon:'fitness',header:'Fitness',subheader:['Gym']},
  {icon:'bed',header:'General',subheader:['Elevator','Air Conditing','Power Backup','Wake-up Call','40 LED TV', 'Free Parking']},
];

  constructor(private route: ActivatedRoute, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fieldid = params.get("item");
      console.log(" this.fieldid ", this.fieldid )
    })
  }

  backClicked() {
    this._location.back();
  }


}
