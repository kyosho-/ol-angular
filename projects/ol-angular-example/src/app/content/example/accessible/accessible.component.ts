import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-accessible',
  templateUrl: './accessible.component.html',
  styleUrls: ['./accessible.component.css']
})
export class AccessibleComponent implements OnInit {

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
