import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Home, About } from '../containers'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default Routes
