import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import routes from '../../routes/admin/routes'

class MasterLayout extends Component {
  render() {
    return (
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => (
                        <route.component {...props.component} />
                      )}
                    />
                  ) : null
                })}
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default MasterLayout
