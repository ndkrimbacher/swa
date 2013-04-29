OpenLayers.Handler.Point.prototype.activate = function() {
    if(!OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        return false;
    }
    // create temporary vector layer for rendering geometry sketch
    // TBD: this could be moved to initialize/destroy - setting visibility here
    var options = OpenLayers.Util.extend({
        displayInLayerSwitcher: false,
        // indicate that the temp vector layer will never be out of range
        // without this, resolution properties must be specified at the
        // map-level for this temporary layer to init its resolutions
        // correctly
        calculateInRange: OpenLayers.Function.True,
        wrapDateLine: this.citeCompliant
    }, this.layerOptions);
    this.layer = new OpenLayers.Layer.Vector(this.CLASS_NAME, options);
    this.layer.setZIndex(options.zIndex);
    this.map.addLayer(this.layer);
    return true;
};

OpenLayers.Map.prototype.setLayerZIndex = function (layer, zIdx) {
//    layer.setZIndex(
//        this.Z_INDEX_BASE[layer.isBaseLayer ? 'BaseLayer' : 'Overlay']
//            + zIdx * 5 );
};