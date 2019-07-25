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
      }
    ];
    return { examples };
  }

  constructor() { }
}
