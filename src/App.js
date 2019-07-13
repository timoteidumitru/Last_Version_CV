import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Index'
import Menu from './components/menu/Index'
import About from './components/about/Index'
import Work from './components/work/Index'
import Resume from './components/resume/Index'
import Contact from './components/contact/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router git basename="Last_Version_CV">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
