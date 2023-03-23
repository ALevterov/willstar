let map = new mapgl.Map('map', {
  center: [37.55533826986216, 55.741605048498194],
  zoom: 16.7,
  key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
  // rotation: -3,
  // pitch: 45,
  style: 'bd0aa213-8e8e-4dc7-ac63-9cfe6d5b0224',
})
const marker = new mapgl.Marker(map, {
  coordinates: [37.55533826986216, 55.741605048498194],
})
