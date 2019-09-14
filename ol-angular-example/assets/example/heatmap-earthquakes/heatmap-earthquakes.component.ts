import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import KML from 'ol/format/KML';
import { Heatmap as HeatmapLayer, Tile as TileLayer } from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-heatmap-earthquakes',
  templateUrl: './heatmap-earthquakes.component.html',
  styleUrls: ['./heatmap-earthquakes.component.css']
})
export class HeatmapEarthquakesComponent implements OnInit {

  private map: Map;
  vector: HeatmapLayer;

  blur = 15;
  radius = 5;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.vector = new HeatmapLayer({
      source: new VectorSource({
        url: 'assets/example-data/2012_Earthquakes_Mag5.kml',
        format: new KML({
          extractStyles: false
        })
      }),
      blur: this.blur,
      radius: this.radius
    });

    this.vector.getSource().on('addfeature', (event) => {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = event.feature.get('name');
      const magnitude = parseFloat(name.substr(2));
      event.feature.set('weight', magnitude - 5);
    });

    const raster = new TileLayer({
      source: new Stamen({
        layer: 'toner'
      })
    });

    this.map = new Map({
      layers: [raster, this.vector],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  setBlur(event: Event) {
    this.vector.setBlur(parseInt((event.target as HTMLInputElement).value, 10));
  }

  setRadius(event: Event) {
    this.vector.setRadius(parseInt((event.target as HTMLInputElement).value, 10));
  }
}
