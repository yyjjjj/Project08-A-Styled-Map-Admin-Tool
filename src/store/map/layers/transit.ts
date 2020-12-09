export default [
  {
    id: 'transit-airport-section-fill',
    type: 'fill',
    source: 'composite',
    'source-layer': 'landuse',
    layout: {
      visibility: 'visible',
    },
    paint: {
      'fill-color': 'hsl(234, 20%, 30%)',
    },
    filter: ['==', ['get', 'class'], 'airport'],
  },
  {
    id: 'transit-airport-section-fill-2',
    type: 'fill',
    source: 'composite',
    'source-layer': 'aeroway',
    minzoom: 11,
    filter: [
      'all',
      ['==', ['geometry-type'], 'Polygon'],
      ['match', ['get', 'type'], ['runway', 'taxiway', 'helipad'], true, false],
    ],
    layout: {},
    paint: {
      'fill-color': 'hsl(234, 20%, 30%)',
    },
  },
  {
    id: 'transit-airport-section-stroke',
    type: 'line',
    source: 'composite',
    'source-layer': 'aeroway',
    minzoom: 9,
    filter: ['==', ['geometry-type'], 'LineString'],
    layout: {},
    paint: {
      'line-color': 'hsl(234, 20%, 30%)',
      'line-width': [
        'interpolate',
        ['exponential', 1.5],
        ['zoom'],
        9,
        ['match', ['get', 'type'], 'runway', 1, 'taxiway', 0.5, 0.5],
        18,
        ['match', ['get', 'type'], 'runway', 80, 'taxiway', 20, 20],
      ],
    },
  },
  {
    id: 'transit-airport-labelText',
    type: 'symbol',
    source: 'composite',
    'source-layer': 'airport_label',
    minzoom: 8,
    layout: {
      'text-size': 12,
      'icon-image': [
        'step',
        ['get', 'sizerank'],
        ['concat', ['get', 'maki'], '-15'],
        12,
        ['concat', ['get', 'maki'], '-11'],
      ],
      'text-offset': [0, 0.75],
      'text-rotation-alignment': 'viewport',
      'text-anchor': 'top',
      'text-field': [
        'step',
        ['get', 'sizerank'],
        ['coalesce', ['get', 'name_en'], ['get', 'name']],
        15,
        ['get', 'ref'],
      ],
      'text-max-width': 9,
    },
    paint: {
      'text-color': 'hsl(230, 48%, 44%)',
      'text-halo-color': 'hsl(0, 0%, 100%)',
      'text-halo-width': 1,
    },
  },
  {
    id: 'transit-subway-section-stroke',
    type: 'line',
    source: 'line_source',
    'source-layer': 'line',
    layout: {
      visibility: 'visible',
    },
    paint: {
      'line-color': 'hsl(192, 70%, 43%)',
      'line-width': 2,
    },
    filter: ['==', ['get', 'type'], 'subway'],
  },
  {
    id: 'transit-rail-section-stroke',
    type: 'line',
    source: 'line_source',
    'source-layer': 'line',
    layout: {
      visibility: 'visible',
    },
    paint: {
      'line-color': 'hsl(234, 20%, 30%)',
      'line-width': 1,
    },
    filter: ['match', ['get', 'type'], 'rail', true, false],
  },
  {
    id: 'transit-rail-section-stroke2',
    type: 'line',
    source: 'composite',
    'source-layer': 'road',
    layout: {
      visibility: 'visible',
      'line-join': 'round',
    },
    minzoom: 13,

    paint: {
      'line-color': 'hsl(234, 20%, 30%)',
      'line-width': 1,
    },
    filter: [
      'all',
      ['match', ['get', 'class'], ['major_rail', 'minor_rail'], true, false],
      ['match', ['get', 'structure'], ['none', 'ford'], true, false],
    ],
  },
  {
    id: 'transit-bus-labelText',
    type: 'symbol',
    source: 'poi_source',
    'source-layer': 'poi',
    layout: {
      'text-field': ['get', 'name'],
      'text-size': 12,
      visibility: 'visible',
    },
    paint: {
      'text-halo-color': 'hsl(0, 0%, 100%)',
      'text-halo-width': 1,
      'text-color': 'hsl(234, 20%, 30%)',
    },
    filter: ['==', ['get', 'type'], 'bus_stop'],
  },
];
