import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Index'
import Menu from './components/menu/Index'
import About from './components/about/Index'
import Work from './components/work/Index'
import Resume from './components/resume/Index'
import Contact from './components/contact/Index'
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { y: 0, opacity: 1, beforeChildren: true },
  exit: { y: '90%', opacity: 0 }
})

const App = () => (
  <Route
    render={({ location })  => (
      <div className="App">
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </div>
    )}
  />
)

export default App
