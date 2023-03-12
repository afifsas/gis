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
                title: '1682 to AI'
            });
var format_5618toAI_2 = new ol.format.GeoJSON();
var features_5618toAI_2 = format_5618toAI_2.readFeatures(json_5618toAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5618toAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5618toAI_2.addFeatures(features_5618toAI_2);
var lyr_5618toAI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5618toAI_2, 
                style: style_5618toAI_2,
                interactive: true,
                title: '5618 to AI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1682toAI_1.setVisible(true);lyr_5618toAI_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1682toAI_1,lyr_5618toAI_2];
lyr_1682toAI_1.set('fieldAliases', {'Site ID 1682': 'Site ID 1682', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': '1682', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipe Transmisi': 'Transmisi', 'ID AI': 'ID AI', 'Provinsi_1': 'Prov', 'Kabupaten/Kota': 'Kab', 'Kecamatan_1': 'Kecamatan_1', 'Desa_1': 'Desa_1', 'Nama Lokasi': 'Lokasi', 'Longitude_1': 'Long', 'Latitude_1': 'Lat', 'status': 'Status', 'Distance': 'Dist', 'Dist < 1.5 km': 'range', 'Dist < 3 km': 'radius 3', });
lyr_5618toAI_2.set('fieldAliases', {'Site ID 5618': 'Site id 5618', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipe Transmisi': 'transmisi', 'ID AI': 'id AI', 'Provinsi_1': 'Provinsi_1', 'Kabupaten/Kota': 'Kabupaten/Kota', 'Kecamatan_1': 'Kecamatan_1', 'Desa_1': 'Desa_1', 'Nama Lokasi': 'Nama Lokasi', 'Longitude_1': 'Longitude_1', 'Latitude_1': 'Latitude_1', 'status': 'status', 'Distance': 'dist', 'Dist < 1.5 km': 'range', 'Dist < 3 km': 'Dist < 3 km', });
lyr_1682toAI_1.set('fieldImages', {'Site ID 1682': 'Hidden', 'Provinsi': 'Hidden', 'Kabupaten': 'Hidden', 'Kecamatan': 'Hidden', 'Desa': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Tipe Transmisi': 'TextEdit', 'ID AI': 'TextEdit', 'Provinsi_1': 'Hidden', 'Kabupaten/Kota': 'Hidden', 'Kecamatan_1': 'Hidden', 'Desa_1': 'Hidden', 'Nama Lokasi': 'TextEdit', 'Longitude_1': 'TextEdit', 'Latitude_1': 'TextEdit', 'status': 'TextEdit', 'Distance': 'TextEdit', 'Dist < 1.5 km': 'TextEdit', 'Dist < 3 km': 'Hidden', });
lyr_5618toAI_2.set('fieldImages', {'Site ID 5618': 'TextEdit', 'Provinsi': 'Hidden', 'Kabupaten': 'Hidden', 'Kecamatan': 'Hidden', 'Desa': 'Hidden', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Tipe Transmisi': 'TextEdit', 'ID AI': 'TextEdit', 'Provinsi_1': 'Hidden', 'Kabupaten/Kota': 'Hidden', 'Kecamatan_1': 'Hidden', 'Desa_1': 'Hidden', 'Nama Lokasi': 'Hidden', 'Longitude_1': 'Hidden', 'Latitude_1': 'Hidden', 'status': 'TextEdit', 'Distance': 'TextEdit', 'Dist < 1.5 km': 'TextEdit', 'Dist < 3 km': 'Hidden', });
lyr_1682toAI_1.set('fieldLabels', {'Desa': 'inline label', 'Tipe Transmisi': 'inline label', 'ID AI': 'inline label', 'Nama Lokasi': 'inline label', 'Longitude_1': 'inline label', 'Latitude_1': 'inline label', 'status': 'inline label', 'Distance': 'inline label', 'Dist < 1.5 km': 'no label', });
lyr_5618toAI_2.set('fieldLabels', {'Site ID 5618': 'inline label', 'Tipe Transmisi': 'inline label', 'ID AI': 'inline label', 'status': 'inline label', 'Distance': 'inline label', 'Dist < 1.5 km': 'inline label', });
lyr_5618toAI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});