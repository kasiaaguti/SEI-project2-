import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'
import 'bulma'


import Home from './components/Home'
import NavBar from './components/NavBar'
import Main from './components/Main'




const App = () => {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={Main} />

        </Switch>
      </main>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)



/* <Route path="/" component={Blog} />
<Route path="/" component={Job Search} /> */
