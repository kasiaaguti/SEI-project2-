import React from 'react'
import axios from 'axios'


import Map from './Map'

const rapidApiKey = process.env.RapidAPI_Key


class Main extends React.Component {
  constructor() {
    super()

    this.state = { points: null }
    this.mapCenter = { lat: 51.515, lng: -0.078 }
    this.handleClick = this.handleClick.bind(this)


  }

  // get Webcam list when the App component has being loading into the DOM.
  componentDidMount(){
    this.getFirstWebcamList()
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getFirstWebcamList() {
    axios.get('https://webcamstravel.p.rapidapi.com/webcams/list/orderby=popularity,desc/limit=50?show=webcams:image,location,player',
      { headers: {
        'X-RapidAPI-H': 'webcamstravel.p.rapidapi.com',
        'X-RapidAPI-Key': rapidApiKey
      }
      })

      .then(res => {
        this.setState({ points: res.data.result.webcams}, () => console.log(this.state.points))
      })
      .catch(err => console.log(err))
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getWebcamList(lat, lng) {
    axios.get(`https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${lat},${lng},250/limit=50?show=webcams:image,location,player`,
      { headers: {
        'X-RapidAPI-H': 'webcamstravel.p.rapidapi.com',
        'X-RapidAPI-Key': rapidApiKey
      }
      })

      .then(res => {
        this.setState({ points: res.data.result.webcams}, () => console.log(this.state.points))
      })
      .catch(err => console.log(err))
  }

  // filter out the countries without latlng
  getFilteredWebcamList(list){
    return list.filter(element => element.latlng.length > 0)
  }

  handleClick(e) {
    this.getWebcamList(e.lngLat.lat, e.lngLat.lng)
  }

  render() {
    if (!this.state.points) return null
    return (
      <main>
        <Map
          markers={this.state.points}
          onClick={this.handleClick}
          center={this.mapCenter}
          
        />
      </main>
    )
  }
}


export default Main
