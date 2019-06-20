import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
  }
  // applying custom style to the map
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/gaebar/cjx3dxidn01941comlfwaysve',
      center: this.props.center,
      zoom: 0
    })
    // create custom markers with Webcam flags and popups, as explaind in https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      // create custom popups one for each marker
      var el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(' + point.flag + ')'
      // create markers with HTML popoups
      // https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
      return new mapboxgl.Marker(el)
        .setLngLat({ lat: point.latlng[0], lng: point.latlng[1] })
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>' + point.name + '</h3>'))
        .addTo(this.map)
    })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}
export default Map
