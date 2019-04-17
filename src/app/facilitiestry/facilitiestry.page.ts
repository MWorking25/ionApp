import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-facilitiestry',
  templateUrl: './facilitiestry.page.html',
  styleUrls: ['./facilitiestry.page.scss'],
})
export class FacilitiestryPage implements OnInit {
  fieldid:any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fieldid = params.get("item");
      console.log(" this.fieldid ", this.fieldid )
    })
  }

}
