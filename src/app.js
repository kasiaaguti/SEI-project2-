import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './styles/style.scss'

import Map from './components/Map'

const rapidApiKey = process.env.RapidAPI_Key


class App extends React.Component {
  constructor() {
    super()

    this.state = { points: null }
    this.mapCenter = { lat: 51.515, lng: -0.078 }
    this.handleClick = this.handleClick.bind(this)
  }

  // get Webcam list when the App component has being loading into the DOM.
  componentDidMount(){
    this.getWebcamList()
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getWebcamList() {
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
  // filter out the countries without latlng
  getFilteredWebcamList(list){
    return list.filter(element => element.latlng.length > 0)
  }

  handleClick() {
    this.getWebcamList()
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

{/* <h1>Tube Status</h1>
<div>
  {this.state.points && this.state.points.map(point => (
    <ul key={point.id}>
      <li>{point.title}</li>
      <span>Latitude: {point.location.latitude}</span>
      <span>Longitude: {point.location.longitude}</span>
    </ul>
  ))}
</div> */}
