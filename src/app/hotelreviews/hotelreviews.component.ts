import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {Location} from '@angular/common';
@Component({
  selector: 'app-hotelreviews',
  templateUrl: './hotelreviews.component.html',
  styleUrls: ['./hotelreviews.component.scss'],
})
export class HotelreviewsComponent implements OnInit {
  fieldid;
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
