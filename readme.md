![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
​
# General Assembly – Project 2
This was the second project during the General Assembly Software Engineering Immersive course (Week 5). The project was made in collaboration with Gaetano https://github.com/gaebar/

## Brief
​
* Build a React application that consumes a public API.
* Have several components - At least one classical and one functional.
* The app should include a router - with several "pages".
* Have semantically clean HTML.
* Be deployed online and accessible to the public.
* Work in pairs.


## Timeframe & Team
​
48h, pair programming

## Deployment
​
Our website is deployed on Heroku and it can be found here: http://digital-nomad-ga.herokuapp.com/
​
## Technologies Used
| Category | List |
| ---- | --- |
| Languages                            | JavaScript (ECMAScript6), CSS3, HTML5 |
| Front-end Web Application Framework / Library  | React |
| Server Environment                   | Node.js with Express.js |
| Project Collaboration Tool           | Slack, Teletype |
| REST client                          | Insomnia |
| Style                                | Bulma |
| Text Editor                          | Atom |
| Browser                              | Chrome |
| Version control | Git and GitHub
| Deployment                             | Heroku |
| Module bundler                             | Webpack |

## Approach:

As this was a pair coded 'reactathon' with a very limited timeframe, we chose was to focus on functionality. For styling we used Bulma which was very helpful.

Most of our coding was done on one laptop, so we discussed each piece of code and the best approaches. We also used the Teletype team coding tool.

## Process

The core idea was to used Webcamstravel API https://webcamstravel.p.rapidapi.com/ and render it on a map (for which we used Mapbox). Webcam API gave us access to public cameras from all over the world. We used geographic coordinates to show markers of the camera's locations on the map. After an user clicks a marker in desired location a popup appears showing more details. User can click on the camera image to see a live view from this particular camera in a new window.


## Visuals
<img src="src/assets/Screenshot.png" width="900">

**Rendering first set of markers**
```
this.markers.forEach(marker => marker.remove())
this.markers = this.props.markers.map(point => {
  // create custom popups one for each marker
  const el = document.createElement('div')
  el.className = 'marker'
  el.style.backgroundImage = 'url(' + point.image.current.preview + ')'
```
**Accessing a set of webcams after user clicks on particular location**
```
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
```


## Challenges

Webcamstravel allows to access just fifty cameras at the same time. We decided at the first render to show 50 most popular cameras in the world. Then fifty most popular in the 200km radius from the place where a user clicks.

## Moving Forward
We might work more on user experience regarding popups and redirecting to webcams
