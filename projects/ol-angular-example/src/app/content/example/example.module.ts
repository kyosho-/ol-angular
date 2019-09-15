import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExampleRoutingModule } from './example-routing.module';

import { ExampleComponent } from './example.component';

import { AccessibleComponent } from './accessible/accessible.component';
import { AnimationComponent } from './animation/animation.component';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { ArcgisTiledComponent } from './arcgis-tiled/arcgis-tiled.component';

import { SimpleComponent } from './simple/simple.component';

import { StaticImageComponent } from './static-image/static-image.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { D3Component } from './d3/d3.component';
import { RotateNorthControlComponent } from './custom-controls/rotate-north-control/rotate-north-control.component';
import { AttributionsComponent } from './attributions/attributions.component';
import { BingMapsComponent } from './bing-maps/bing-maps.component';
import { CanvasTilesComponent } from './canvas-tiles/canvas-tiles.component';
import { CartodbComponent } from './cartodb/cartodb.component';
import { ChaikinComponent } from './chaikin/chaikin.component';
import { CustomInteractionsComponent } from './custom-interactions/custom-interactions.component';
import { ClusterComponent } from './cluster/cluster.component';
import { DragAndDropImageVectorComponent } from './drag-and-drop-image-vector/drag-and-drop-image-vector.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DeviceOrientationComponent } from './device-orientation/device-orientation.component';
import { DrawAndModifyFeaturesComponent } from './draw-and-modify-features/draw-and-modify-features.component';
import { DragRotateAndZoomComponent } from './drag-rotate-and-zoom/drag-rotate-and-zoom.component';
import { DrawFeaturesComponent } from './draw-features/draw-features.component';
import { DrawFreehandComponent } from './draw-freehand/draw-freehand.component';
import { DrawShapesComponent } from './draw-shapes/draw-shapes.component';
import { EarthquakeCustomSymbolComponent } from './earthquake-custom-symbol/earthquake-custom-symbol.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { Epsg4326Component } from './epsg4326/epsg4326.component';
import { ExportMapComponent } from './export-map/export-map.component';
import { ExtentInteractionComponent } from './extent-interaction/extent-interaction.component';
import { FeatureMoveAnimationComponent } from './feature-move-animation/feature-move-animation.component';
import { FlightAnimationComponent } from './flight-animation/flight-animation.component';
import { FeatureAnimationComponent } from './feature-animation/feature-animation.component';
import { GeojsonVtComponent } from './geojson-vt/geojson-vt.component';
import { GeojsonComponent } from './geojson/geojson.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { GetfeatureinfoImageComponent } from './getfeatureinfo-image/getfeatureinfo-image.component';
import { GetfeatureinfoTileComponent } from './getfeatureinfo-tile/getfeatureinfo-tile.component';
import { GpxComponent } from './gpx/gpx.component';
import { GetfeatureinfoLayersComponent } from './getfeatureinfo-layers/getfeatureinfo-layers.component';
import { GraticuleComponent } from './graticule/graticule.component';
import { HeatmapEarthquakesComponent } from './heatmap-earthquakes/heatmap-earthquakes.component';
import { HitToleranceComponent } from './hit-tolerance/hit-tolerance.component';
import { IconNegativeComponent } from './icon-negative/icon-negative.component';
import { HereMapsComponent } from './here-maps/here-maps.component';

import { IconSpriteWebglComponent } from './icon-sprite-webgl/icon-sprite-webgl.component';
import { IgcComponent } from './igc/igc.component';
import { ImageFilterComponent } from './image-filter/image-filter.component';
import { ImageVectorLayerComponent } from './image-vector-layer/image-vector-layer.component';
import { KmlComponent } from './kml/kml.component';
import { JstsComponent } from './jsts/jsts.component';
import { InteractionOptionsComponent } from './interaction-options/interaction-options.component';
import { LayerExtentComponent } from './layer-extent/layer-extent.component';
import { GeolocationOrientationComponent } from './geolocation-orientation/geolocation-orientation.component';
import { LayerClippingWebglComponent } from './layer-clipping-webgl/layer-clipping-webgl.component';
import { LayerSpyComponent } from './layer-spy/layer-spy.component';
import { LayerZIndexComponent } from './layer-z-index/layer-z-index.component';
import { LineArrowsComponent } from './line-arrows/line-arrows.component';
import { LayerSwipeComponent } from './layer-swipe/layer-swipe.component';
import { LocalizedOpenstreetmapComponent } from './localized-openstreetmap/localized-openstreetmap.component';
import { MagnifyComponent } from './magnify/magnify.component';
import { MapguideUntiledComponent } from './mapguide-untiled/mapguide-untiled.component';
import { ModifyFeaturesComponent } from './modify-features/modify-features.component';
import { MinMaxResolutionComponent } from './min-max-resolution/min-max-resolution.component';
import { MobileFullScreenComponent } from './mobile-full-screen/mobile-full-screen.component';
import { MinZoomComponent } from './min-zoom/min-zoom.component';
import { MoveendComponent } from './moveend/moveend.component';
import { OverviewmapComponent } from './overviewmap/overviewmap.component';
import { PermalinkComponent } from './permalink/permalink.component';
import { PolygonStylesComponent } from './polygon-styles/polygon-styles.component';
import { PinchZoomComponent } from './pinch-zoom/pinch-zoom.component';
import { NavigationControlsComponent } from './navigation-controls/navigation-controls.component';
import { ReprojectionByCodeComponent } from './reprojection-by-code/reprojection-by-code.component';
import { RenderGeometryComponent } from './render-geometry/render-geometry.component';
import { RegularshapeComponent } from './regularshape/regularshape.component';
import { ReprojectionComponent } from './reprojection/reprojection.component';
import { ReprojectionImageComponent } from './reprojection-image/reprojection-image.component';
import { ReprojectionWgs84Component } from './reprojection-wgs84/reprojection-wgs84.component';
import { ReusableSourceComponent } from './reusable-source/reusable-source.component';
import { SelectFeaturesComponent } from './select-features/select-features.component';
import { ScalelineIndianaEastComponent } from './scaleline-indiana-east/scaleline-indiana-east.component';
import { ScaleLineComponent } from './scale-line/scale-line.component';
import { RotationComponent } from './rotation/rotation.component';
import { SemiTransparentLayerComponent } from './semi-transparent-layer/semi-transparent-layer.component';
import { SnapComponent } from './snap/snap.component';
import { SphereMollweideComponent } from './sphere-mollweide/sphere-mollweide.component';
import { StamenComponent } from './stamen/stamen.component';
import { SymbolAtlasWebglComponent } from './symbol-atlas-webgl/symbol-atlas-webgl.component';
import { SyntheticLinesComponent } from './synthetic-lines/synthetic-lines.component';
import { SyntheticPointsComponent } from './synthetic-points/synthetic-points.component';
import { StreetLabelsComponent } from './street-labels/street-labels.component';
import { TeleportComponent } from './teleport/teleport.component';
import { TilejsonComponent } from './tilejson/tilejson.component';
import { TileTransitionsComponent } from './tile-transitions/tile-transitions.component';
import { TopolisComponent } from './topolis/topolis.component';
import { TissotComponent } from './tissot/tissot.component';
import { TranslateFeaturesComponent } from './translate-features/translate-features.component';
import { TurfComponent } from './turf/turf.component';
import { VectorEsriComponent } from './vector-esri/vector-esri.component';
import { VectorLabelDeclutteringComponent } from './vector-label-decluttering/vector-label-decluttering.component';
import { VectorLayerComponent } from './vector-layer/vector-layer.component';
import { VectorOsmComponent } from './vector-osm/vector-osm.component';
import { VectorEsriEditComponent } from './vector-esri-edit/vector-esri-edit.component';
import { VectorTileSelectionComponent } from './vector-tile-selection/vector-tile-selection.component';
import { VectorWfsComponent } from './vector-wfs/vector-wfs.component';
import { VectorWfsGetfeatureComponent } from './vector-wfs-getfeature/vector-wfs-getfeature.component';
import { TopojsonComponent } from './topojson/topojson.component';
import { WktComponent } from './wkt/wkt.component';
import { WmsCustomProjComponent } from './wms-custom-proj/wms-custom-proj.component';
import { WmsCustomTilegridX512x256Component } from './wms-custom-tilegrid-x512x256/wms-custom-tilegrid-x512x256.component';
import { PreloadComponent } from './preload/preload.component';
import { WmsNoProjComponent } from './wms-no-proj/wms-no-proj.component';
import { WmsImageCustomProjComponent } from './wms-image-custom-proj/wms-image-custom-proj.component';
import { WmsImageComponent } from './wms-image/wms-image.component';
import { WmsTiledComponent } from './wms-tiled/wms-tiled.component';
import { WmtsComponent } from './wmts/wmts.component';
import { WmsTiledWrap180Component } from './wms-tiled-wrap180/wms-tiled-wrap180.component';
import { WmsTimeComponent } from './wms-time/wms-time.component';
import { WmtsDimensionsComponent } from './wmts-dimensions/wmts-dimensions.component';
import { WmtsIgnComponent } from './wmts-ign/wmts-ign.component';
import { XyzComponent } from './xyz/xyz.component';
import { WmtsLayerFromCapabilitiesComponent } from './wmts-layer-from-capabilities/wmts-layer-from-capabilities.component';
import { XyzEsriComponent } from './xyz-esri/xyz-esri.component';
import { ZoomConstrainedComponent } from './zoom-constrained/zoom-constrained.component';
import { XyzRetinaComponent } from './xyz-retina/xyz-retina.component';
import { XyzEsri4326x512Component } from './xyz-esri4326x512/xyz-esri4326x512.component';
import { ZoomifyComponent } from './zoomify/zoomify.component';
import { BlendModesComponent } from './blend-modes/blend-modes.component';
import { ButtonTitleComponent } from './button-title/button-title.component';
import { CenterComponent } from './center/center.component';
import { BoxSelectionComponent } from './box-selection/box-selection.component';
import { ColorManipulationComponent } from './color-manipulation/color-manipulation.component';
import { EarthquakeClustersComponent } from './earthquake-clusters/earthquake-clusters.component';
import { FractalComponent } from './fractal/fractal.component';
import { FullScreenSourceComponent } from './full-screen-source/full-screen-source.component';
import { ExportPdfComponent } from './export-pdf/export-pdf.component';
import { FullScreenDragRotateZoomComponent } from './full-screen-drag-rotate-zoom/full-screen-drag-rotate-zoom.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { IconColorComponent } from './icon-color/icon-color.component';
import { KmlEarthquakesComponent } from './kml-earthquakes/kml-earthquakes.component';
import { ImageLoadEventsComponent } from './image-load-events/image-load-events.component';
import { IconComponent } from './icon/icon.component';
import { LayerGroupComponent } from './layer-group/layer-group.component';
import { LayerClippingComponent } from './layer-clipping/layer-clipping.component';
import { KmlTimezonesComponent } from './kml-timezones/kml-timezones.component';
import { MapboxVectorTilesComponent } from './mapbox-vector-tiles/mapbox-vector-tiles.component';
import { LazySourceComponent } from './lazy-source/lazy-source.component';
import { MapboxVectorTilesAdvancedComponent } from './mapbox-vector-tiles-advanced/mapbox-vector-tiles-advanced.component';
import { MeasureComponent } from './measure/measure.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ModifyTestComponent } from './modify-test/modify-test.component';
import { OsmVectorTilesComponent } from './osm-vector-tiles/osm-vector-tiles.component';
import { OverviewmapCustomComponent } from './overviewmap-custom/overviewmap-custom.component';
import { RegionGrowindComponent } from './region-growind/region-growind.component';
import { PopupComponent } from './popup/popup.component';
import { RasterComponent } from './raster/raster.component';
import { SeaLevelComponent } from './sea-level/sea-level.component';
import { ShadedReliefComponent } from './shaded-relief/shaded-relief.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { TileLoadEventsComponent } from './tile-load-events/tile-load-events.component';
import { UtfgridComponent } from './utfgrid/utfgrid.component';
import { WmsCapabilitiesComponent } from './wms-capabilities/wms-capabilities.component';
import { VectorTileInfoComponent } from './vector-tile-info/vector-tile-info.component';
import { WmtsCapabilitiesComponent } from './wmts-capabilities/wmts-capabilities.component';
import { WmtsHidpiComponent } from './wmts-hidpi/wmts-hidpi.component';
import { ZoomsliderComponent } from './zoomslider/zoomslider.component';
import { VectorLabelsComponent } from './vector-labels/vector-labels.component';
import { CanvasGradientPatternComponent } from './canvas-gradient-pattern/canvas-gradient-pattern.component';

import { HighlightModule } from 'ngx-highlightjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ExampleComponent,

    AccessibleComponent,
    AnimationComponent,
    ArcgisImageComponent,

    ArcgisTiledComponent,
    SimpleComponent,
    StaticImageComponent,
    MousePositionComponent,
    CustomControlsComponent,
    D3Component,
    RotateNorthControlComponent,
    AttributionsComponent,
    BingMapsComponent,
    CanvasTilesComponent,
    CartodbComponent,
    ChaikinComponent,
    CustomInteractionsComponent,
    ClusterComponent,
    DragAndDropImageVectorComponent,
    DragAndDropComponent,
    DeviceOrientationComponent,
    DrawAndModifyFeaturesComponent,
    DragRotateAndZoomComponent,
    DrawFeaturesComponent,
    DrawFreehandComponent,
    DrawShapesComponent,
    EarthquakeCustomSymbolComponent,
    DynamicDataComponent,
    Epsg4326Component,
    ExportMapComponent,
    ExtentInteractionComponent,
    FeatureMoveAnimationComponent,
    FlightAnimationComponent,
    FeatureAnimationComponent,
    GeojsonVtComponent,
    GeojsonComponent,
    GeolocationComponent,
    GetfeatureinfoImageComponent,
    GetfeatureinfoTileComponent,
    GpxComponent,
    GetfeatureinfoLayersComponent,
    GraticuleComponent,
    HeatmapEarthquakesComponent,
    HitToleranceComponent,
    IconNegativeComponent,
    HereMapsComponent,
    IconSpriteWebglComponent,
    IgcComponent,
    ImageFilterComponent,
    ImageVectorLayerComponent,
    KmlComponent,
    JstsComponent,
    InteractionOptionsComponent,
    LayerExtentComponent,
    GeolocationOrientationComponent,
    LayerClippingWebglComponent,
    LayerSpyComponent,
    LayerZIndexComponent,
    LineArrowsComponent,
    LayerSwipeComponent,
    LocalizedOpenstreetmapComponent,
    MagnifyComponent,
    MapguideUntiledComponent,
    ModifyFeaturesComponent,
    MinMaxResolutionComponent,
    MobileFullScreenComponent,
    MinZoomComponent,
    MoveendComponent,
    OverviewmapComponent,
    PermalinkComponent,
    PolygonStylesComponent,
    PinchZoomComponent,
    NavigationControlsComponent,
    ReprojectionByCodeComponent,
    RenderGeometryComponent,
    RegularshapeComponent,
    ReprojectionComponent,
    ReprojectionImageComponent,
    ReprojectionWgs84Component,
    ReusableSourceComponent,
    SelectFeaturesComponent,
    ScalelineIndianaEastComponent,
    ScaleLineComponent,
    RotationComponent,
    SemiTransparentLayerComponent,
    SnapComponent,
    SphereMollweideComponent,
    StamenComponent,
    SymbolAtlasWebglComponent,
    SyntheticLinesComponent,
    SyntheticPointsComponent,
    StreetLabelsComponent,
    TeleportComponent,
    TilejsonComponent,
    TileTransitionsComponent,
    TopolisComponent,
    TissotComponent,
    TranslateFeaturesComponent,
    TurfComponent,
    VectorEsriComponent,
    VectorLabelDeclutteringComponent,
    VectorLayerComponent,
    VectorOsmComponent,
    VectorEsriEditComponent,
    VectorTileSelectionComponent,
    VectorWfsComponent,
    VectorWfsGetfeatureComponent,
    TopojsonComponent,
    WktComponent,
    WmsCustomProjComponent,
    WmsCustomTilegridX512x256Component,
    PreloadComponent,
    WmsNoProjComponent,
    WmsImageCustomProjComponent,
    WmsImageComponent,
    WmsTiledComponent,
    WmtsComponent,
    WmsTiledWrap180Component,
    WmsTimeComponent,
    WmtsDimensionsComponent,
    WmtsIgnComponent,
    XyzComponent,
    WmtsLayerFromCapabilitiesComponent,
    XyzEsriComponent,
    ZoomConstrainedComponent,
    XyzRetinaComponent,
    XyzEsri4326x512Component,
    ZoomifyComponent,
    BlendModesComponent,
    ButtonTitleComponent,
    CenterComponent,
    BoxSelectionComponent,
    ColorManipulationComponent,
    EarthquakeClustersComponent,
    FractalComponent,
    FullScreenSourceComponent,
    ExportPdfComponent,
    FullScreenDragRotateZoomComponent,
    FullScreenComponent,
    IconColorComponent,
    KmlEarthquakesComponent,
    ImageLoadEventsComponent,
    IconComponent,
    LayerGroupComponent,
    LayerClippingComponent,
    KmlTimezonesComponent,
    MapboxVectorTilesComponent,
    LazySourceComponent,
    MapboxVectorTilesAdvancedComponent,
    MeasureComponent,
    OverlayComponent,
    ModifyTestComponent,
    OsmVectorTilesComponent,
    OverviewmapCustomComponent,
    RegionGrowindComponent,
    PopupComponent,
    RasterComponent,
    SeaLevelComponent,
    ShadedReliefComponent,
    SideBySideComponent,
    TileLoadEventsComponent,
    UtfgridComponent,
    WmsCapabilitiesComponent,
    VectorTileInfoComponent,
    WmtsCapabilitiesComponent,
    WmtsHidpiComponent,
    ZoomsliderComponent,
    VectorLabelsComponent,
    CanvasGradientPatternComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ExampleRoutingModule,
    HighlightModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonModule
  ],
  entryComponents: [
    RotateNorthControlComponent
  ]
})
export class ExampleModule { }
