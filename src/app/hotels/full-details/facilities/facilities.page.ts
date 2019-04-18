import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.page.html',
  styleUrls: ['./facilities.page.scss'],
})
export class FacilitiesPage{

  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams
  }

}
