var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1682toAI_1 = new ol.format.GeoJSON();
var features_1682toAI_1 = format_1682toAI_1.readFeatures(json_1682toAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1682toAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1682toAI_1.addFeatures(features_1682toAI_1);
var lyr_1682toAI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1682toAI_1, 
                style: style_1682toAI_1,
                interactive: true,
    title: '1682 to AI<br />\
    <img src="styles/legend/1682toAI_1_0.png" /> #N/A<br />\
    <img src="styles/legend/1682toAI_1_1.png" /> ON AIR<br />\
    <img src="styles/legend/1682toAI_1_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1682toAI_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1682toAI_1];
lyr_1682toAI_1.set('fieldAliases', {'Site ID 1682': 'Site ID 1682', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': '1682', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipe Transmisi': 'Transmisi', 'ID AI': 'ID AI', 'Provinsi_1': 'Prov', 'Kabupaten/Kota': 'Kab', 'Kecamatan_1': 'Kecamatan_1', 'Desa_1': 'Desa_1', 'Nama Lokasi': 'Lokasi', 'Longitude_1': 'Long', 'Latitude_1': 'Lat', 'status': 'Status', 'Distance': 'Dist', 'Dist < 1.5 km': 'radius 1.5', 'Dist < 3 km': 'radius 3', });
lyr_1682toAI_1.set('fieldImages', {'Site ID 1682': 'Hidden', 'Provinsi': 'Hidden', 'Kabupaten': 'Hidden', 'Kecamatan': 'Hidden', 'Desa': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Tipe Transmisi': 'TextEdit', 'ID AI': 'TextEdit', 'Provinsi_1': 'Hidden', 'Kabupaten/Kota': 'Hidden', 'Kecamatan_1': 'Hidden', 'Desa_1': 'Hidden', 'Nama Lokasi': 'TextEdit', 'Longitude_1': 'TextEdit', 'Latitude_1': 'TextEdit', 'status': 'TextEdit', 'Distance': 'TextEdit', 'Dist < 1.5 km': 'TextEdit', 'Dist < 3 km': 'TextEdit', });
lyr_1682toAI_1.set('fieldLabels', {'Desa': 'no label', 'Tipe Transmisi': 'no label', 'ID AI': 'no label', 'Nama Lokasi': 'no label', 'Longitude_1': 'no label', 'Latitude_1': 'no label', 'status': 'no label', 'Distance': 'no label', 'Dist < 1.5 km': 'no label', 'Dist < 3 km': 'no label', });
lyr_1682toAI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});