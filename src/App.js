import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NoMatch from './NoMatch'
import Layout from './components/Layout'
import Navigation from './components/NavigationBar'

export default function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch >
      </Layout>
    </>
  )
}
