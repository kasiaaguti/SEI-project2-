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
      zoom: 1
    })
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      // create custom popups one for each marker
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(' + point.image.current.preview + ')'



      // create markers with HTML popoups
      // https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
      return new mapboxgl.Marker(el)
        .setLngLat({ lat: point.location.latitude, lng: point.location.longitude })


        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`
            <div>
              <h3>${point.title}</h3>
                <div style="background-image: url('${point.image.current.preview}'); height: 100px; min-width: 150px; background-repeat: no-repeat; background-size: cover; background-position: center;">
                  <a href="${point.player.day.link}" target="_blank" style="height: 100%; width:100%; display: flex; justify-content: center; align-items:center;">
                    <div style="background-image: url('https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f9.png'); background-size: contain; height: 50px; width: 50px;">
                    </div>
                  </a>
                </div>
            </div>
          `))
        .addTo(this.map)
    })
    this.map.addControl(new mapboxgl.NavigationControl())
    this.map.on('dblclick', this.props.onClick)
  }

  componentDidUpdate(){
    // create custom markers with Webcam flags and popups, as explaind in https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      // create custom popups one for each marker
      var el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(' + point.image.current.preview + ')'


      // create markers with HTML popoups
      // https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
      return new mapboxgl.Marker(el)
        .setLngLat({ lat: point.location.latitude, lng: point.location.longitude })


        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`
            <div>
              <h3>${point.title}</h3>

                <a href="${point.player.day.link}" target="_blank">
                  <img src="${point.image.current.preview}">
                </a>
            </div>
          `))
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

// <h4><a href="${point.player.day.link}"</a></h4>
// <img src=${point.image.current.preview} />
