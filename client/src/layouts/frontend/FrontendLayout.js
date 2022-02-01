import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from '../../components/frontend/Navbar'

import publicroutelist from '../../routes/Publicroutelist'

class FrontendLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />

          <Switch>
            {publicroutelist.map((routedata, idx) => {
              // if (!routedata.name === 'Login') {
              return (
                routedata.component && (
                  <Route
                    key={idx}
                    path={routedata.path}
                    exact={routedata.exact}
                    name={routedata.name}
                    render={(props) => (
                      <routedata.component {...props.component} />
                    )}
                  />
                )
              )
              // } else {
              // }
            })}
          </Switch>
        </div>
      </div>
    )
  }
}
export default FrontendLayout
