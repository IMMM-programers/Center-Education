import Home from '../components/frontend/home/Home'
import Login from '../components/frontend/auth/login/Login'
import Register from '../components/frontend/auth/register/Register'

const publicroutelist = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/register', exact: true, name: 'Register', component: Register },
]
export default publicroutelist
