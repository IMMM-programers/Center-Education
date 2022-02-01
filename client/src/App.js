import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Login from './components/frontend/auth/login/Login'
import Register from './components/frontend/auth/register/Register'

import AdminRoute from './routes/admin/AdminRoute'
import PublicRoute from './layouts/frontend/PublicRoute'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AdminRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="Home" />

          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
          {/* <Route path="/" name="Home" component={Home} /> */}

          {/* <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} /> */}

          <Route path="/login">
            {localStorage.getItem('auth_token') ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            {localStorage.getItem('auth_token') ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )}
          </Route>

          {/* <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
          /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
