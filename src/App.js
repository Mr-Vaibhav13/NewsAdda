import React, { Component } from 'react'
import Navbar from './component/Navbar'
import Newsmain from './component/Newsmain'
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API

  // state = {
  //   progress:0
  // }

  // setProgress = (progress)=>{
  //   this.setState({progress: progress})
  // }


  render() {
    return (
      <div>
      <Router>
        <Navbar />
       
        {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      /> */}

          <Switch>

          <Route exact path="/"><Newsmain key="general1" apiKey = {this.apiKey} pageSize={9} country="in" category="general"/></Route>
          <Route exact path="/business"><Newsmain key="business2" apiKey = {this.apiKey} pageSize={9} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><Newsmain key='entertainment3' apiKey = {this.apiKey} pageSize={9} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><Newsmain key='general4' apiKey = {this.apiKey} pageSize={9} country="in" category="general"/></Route>
          <Route exact path="/science"><Newsmain key='science5' apiKey = {this.apiKey} pageSize={9} country="in" category="science"/></Route>
          <Route exact path="/sports"><Newsmain key='sports6' apiKey = {this.apiKey} pageSize={9} country="in" category="sports"/></Route>
          <Route exact path="/technology"><Newsmain key='technology7' apiKey = {this.apiKey} pageSize={9} country="in" category="technology"/></Route>
          <Route exact path="/health"><Newsmain key='health8' apiKey = {this.apiKey} pageSize={9} country="in" category="health"/></Route>

          </Switch>

        </Router>
      </div>
    )
  }
}

