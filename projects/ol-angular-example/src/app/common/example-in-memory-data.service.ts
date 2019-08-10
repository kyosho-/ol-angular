import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Example } from './example';

@Injectable({
  providedIn: 'root'
})
export class ExampleInMemoryDataService implements InMemoryDbService {
  createDb() {
    const examples: Example[] = [
      {
        id: 'animation',
        fileName: 'animation.html',
        name: 'View Animation',
        description: 'Demonstrates animated pan, zoom, and rotation.'
      },
      {
        id: 'arcgis-tiled',
        fileName: 'arcgis-tiled.html',
        name: 'Tiled ArcGIS MapServer',
        description: 'Example of a tiled ArcGIS layer.'
      },
      {
        id: 'custom-controls',
        fileName: 'custom-controls.html',
        name: 'Custom Controls',
        description: 'Shows how to create custom contorls.'
      },
      {
        id: 'attributions',
        fileName: 'attribution.html',
        name: 'Attributions',
        description: 'Example of a attributions visibily change on map resize. to collapse them on small maps.'
      },
      // {
      //   id: 'custom-controls2',
      //   fileName: 'custom-controls2.html',
      //   name: 'Custom Controls2',
      //   description: 'Shows how to create custom contorls.'
      // },
      {
        id: 'd3',
        fileName: 'd3.html',
        name: 'd3 Integration',
        description: 'Example of using OpenLayers and d3 together.'
      },
      {
        id: 'mouse-position',
        fileName: 'mouse-position.html',
        name: 'Mouse Position',
        description: 'Example of a mouse position control, outside the map.'
      },
      {
        id: 'simple',
        fileName: 'simple.html',
        name: 'Simple Map',
        description: 'Example of a simple map.'
      },
      {
        id: 'static-image',
        fileName: 'static-image.html',
        name: 'Static Image',
        description: 'Example of a static image layer.'
        // },
        // {
        //   id: 'static-image2',
        //   fileName: 'static-image2.html',
        //   name: 'Static Image2',
        //   description: 'Example of a static image layer.'
      }
    ];
    return { examples };
  }

  constructor() { }
}
