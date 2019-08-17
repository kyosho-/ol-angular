import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.css']
})
export class AttributionsComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        // this.map.updateSize();
      }
    );
  }

}
