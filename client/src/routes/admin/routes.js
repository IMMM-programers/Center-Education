import Dashboard from '../../components/admin/Dashboard'
import ViewTeachers from '../../components/admin/ViewTeachers'
import AddTeacher from '../../components/admin/AddTeacher'
import ViewCourses from '../../components/admin/ViewCourses'
import AddCourse from '../../components/admin/AddCourse'

const routes = [
  { path: '/admin', exact: true, name: 'Admin' },
  {
    path: '/admin/dashboard',
    exact: true,
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/view-teacher',
    exact: true,
    name: 'ViewTeachers',
    component: ViewTeachers,
  },
  {
    path: '/admin/add-teacher',
    exact: true,
    name: 'AddTeacher',
    component: AddTeacher,
  },
  {
    path: '/admin/view-course',
    exact: true,
    name: 'ViewCourses',
    component: ViewCourses,
  },
  {
    path: '/admin/add-course',
    exact: true,
    name: 'AddCourse',
    component: AddCourse,
  },
]
export default routes
