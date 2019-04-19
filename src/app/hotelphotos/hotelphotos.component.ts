import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import {Location} from '@angular/common';
import { FullscreenimgComponent } from './fullscreenimg/fullscreenimg.component';
@Component({
  selector: 'app-hotelphotos',
  templateUrl: './hotelphotos.component.html',
  styleUrls: ['./hotelphotos.component.scss'],
})
export class HotelphotosComponent implements OnInit {

  fieldid;

  photos:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  constructor(private route: ActivatedRoute, private router: Router, private _location: Location, private modalController: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fieldid = params.get("item");
      console.log(" this.fieldid ", this.fieldid )
    })
  }

  backClicked() {
    this._location.back();
  }

  openPreview(img) {
    this.modalController.create({
      component: FullscreenimgComponent,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }

}
