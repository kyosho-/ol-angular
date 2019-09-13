import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import RenderEvent from 'ol/render/Event';

@Component({
  selector: 'app-blend-modes',
  templateUrl: './blend-modes.component.html',
  styleUrls: ['./blend-modes.component.css']
})
export class BlendModesComponent implements OnInit {

  private map: Map;
  private redLayer: VectorLayer;
  private greenLayer: VectorLayer;
  private blueLayer: VectorLayer;

  @ViewChild('blendMode', { static: false })
  select: ElementRef<HTMLSelectElement>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    // Create separate layers for red, green an blue circles.
    //
    // Every layer has one feature that is styled with a circle, together the
    // features form the corners of an equilateral triangle and their styles overlap
    this.redLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature(new Point([0, 0]))]
      }),
      style: new Style({
        image: new CircleStyle({
          fill: new Fill({
            color: 'rgba(255,0,0,0.8)'
          }),
          stroke: new Stroke({
            color: 'rgb(255,0,0)',
            width: 15
          }),
          radius: 120
        })
      })
    });

    this.greenLayer = new VectorLayer({
      source: new VectorSource({
        // 433.013 is roughly 250 * Math.sqrt(3)
        features: [new Feature(new Point([250, 433.013]))]
      }),
      style: new Style({
        image: new CircleStyle({
          fill: new Fill({
            color: 'rgba(0,255,0,0.8)'
          }),
          stroke: new Stroke({
            color: 'rgb(0,255,0)',
            width: 15
          }),
          radius: 120
        })
      })
    });

    this.blueLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature(new Point([500, 0]))]
      }),
      style: new Style({
        image: new CircleStyle({
          fill: new Fill({
            color: 'rgba(0,0,255,0.8)'
          }),
          stroke: new Stroke({
            color: 'rgb(0,0,255)',
            width: 15
          }),
          radius: 120
        })
      })
    });

    // Create the map, the view is centered on the triangle. Zooming and panning is
    // restricted to a sane area
    this.map = new Map({
      layers: [
        this.redLayer,
        this.greenLayer,
        this.blueLayer
      ],
      target: 'map',
      view: new View({
        center: [250, 220],
        extent: [0, 0, 500, 500],
        resolution: 4,
        minResolution: 2,
        maxResolution: 32
      })
    });

    // Initially bind listeners
    this.bindLayerListeners(this.redLayer);
    this.bindLayerListeners(this.greenLayer);
    this.bindLayerListeners(this.blueLayer);
  }

  /**
   * This method sets the globalCompositeOperation to the value of the select
   * field and it is bound to the precompose event of the layers.
   *
   * @param event The render event.
   */
  setBlendModeFromSelect = (event: RenderEvent) => {
    event.context.globalCompositeOperation = this.select.nativeElement.value;
  }

  /**
   * This method resets the globalCompositeOperation to the default value of
   * 'source-over' and it is bound to the postcompose event of the layers.
   *
   * @param event The render event.
   */
  resetBlendModeFromSelect = (event: RenderEvent) => {
    event.context.globalCompositeOperation = 'source-over';
  }

  /**
   * Bind the pre- and postcompose handlers to the passed layer.
   *
   * @param layer The layer to bind the handlers to.
   */
  bindLayerListeners(layer: VectorLayer) {
    layer.on('precompose', this.setBlendModeFromSelect);
    layer.on('postcompose', this.resetBlendModeFromSelect);
  }

  /**
   * Unind the pre- and postcompose handlers to the passed layers.
   *
   * @param layer The layer to unbind the handlers from.
   */
  unbindLayerListeners(layer: VectorLayer) {
    layer.un('precompose', this.setBlendModeFromSelect);
    layer.un('postcompose', this.resetBlendModeFromSelect);
  }

  /**
   * Handler for the click event of the 'affect-XXX' checkboxes.
   *
   * @this {HTMLInputElement}
   */
  affectLayerClicked(event: MouseEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    let layer;
    if (target.id === 'affect-red') {
      layer = this.redLayer;
    } else if (target.id === 'affect-green') {
      layer = this.greenLayer;
    } else {
      layer = this.blueLayer;
    }
    if (target.checked) {
      this.bindLayerListeners(layer);
    } else {
      this.unbindLayerListeners(layer);
    }
    this.map.render();
  }

  renderMap() {
    this.map.render();
  }
}
