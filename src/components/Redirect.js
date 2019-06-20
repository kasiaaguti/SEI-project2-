import React, { Component } from "react"

export class Redirect extends Component {
  constructor( props ){
    super()
    this.state = { ...props }
  }
  componentDidMount(){
    window.location = <a href ='https://iamaileen.com/how-to-become-a-digital-nomad-guide/' target="_blank"> </a>
  }
  render(){
    return (<section>Redirecting...</section>)
  }
}

export default Redirect
