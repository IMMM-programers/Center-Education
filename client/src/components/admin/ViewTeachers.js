import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { Checkbox, Select, MenuItem, colors } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ViewTeacher() {
  // const empList = [
  //   {
  //     id: 1,
  //     name: 'Neeraj',
  //     email: 'neeraj@gmail.com',
  //     phone: 9876543210,
  //     age: 23,
  //     year: 2019,
  //   },
  //   {
  //     id: 2,
  //     name: 'Raj',
  //     email: 'raj@gmail.com',
  //     phone: 6678901234,
  //     age: 17,
  //     year: 2020,
  //   },
  //   {
  //     id: 3,
  //     name: 'David',
  //     email: 'david342@gmail.com',
  //     phone: 6312345678,
  //     age: 34,
  //     year: 2019,
  //   },
  //   {
  //     id: 4,
  //     name: 'Vikas',
  //     email: 'vikas75@gmail.com',
  //     phone: 9787654321,
  //     age: 20,
  //     year: 2021,
  //   },
  // ]
  // const [filteredData, setFilteredData] = useState(empList)
  // const [filter, setFilter] = useState(true)
  // const [year, setYear] = useState('all')
  // const columns = [
  //   { title: 'ID', field: 'id' },
  //   { title: 'Name', field: 'name' },
  //   { title: 'Email', field: 'email' },
  //   { title: 'Phone Number', field: 'phone' },
  //   { title: 'Age', field: 'age' },
  //   { title: 'Joining Year', field: 'year' },
  // ]
  // const handleChange = () => {
  //   setFilter(!filter)
  // }
  // useEffect(() => {
  //   setFilteredData(
  //     year === 'all' ? empList : empList.filter((dt) => dt.year === year),
  //   )
  // }, [year])

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Teacher</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard / Teachers</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          <MaterialTable
            title="Teacher Data"
            // data={filteredData}
            // columns={columns}
            options={{
              actionsColumnIndex: -1,
              headerStyle: { background: '#f44336', color: '#fff' },
            }}
            // actions={[
            //   {
            //     icon: () => (
            //       <Select
            //         labelId="demo-simple-select-label"
            //         id="demo-simple-select"
            //         style={{ width: 100 }}
            //         value={year}
            //         onChange={(e) => setYear(e.target.value)}
            //       >
            //         <MenuItem value={'all'}>
            //           <em>All</em>
            //         </MenuItem>
            //         <MenuItem value={2019}>2019</MenuItem>
            //         <MenuItem value={2020}>2020</MenuItem>
            //         <MenuItem value={2021}>2021</MenuItem>
            //       </Select>
            //     ),
            //     tooltip: 'Filter Year',
            //     isFreeAction: true,
            //   },
            //   {
            //     icon: 'edit',
            //     tooltip: 'Edit User',
            //     // onClick: (event, rowData) => alert('You saved ' + rowData.name),
            //   },
            //   (rowData) => ({
            //     icon: 'delete',
            //     tooltip: 'Delete User',
            //     // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
            //     // disabled: rowData.birthYear < 2000
            //   }),
            // ]}
          />

          <Link to="/admin/add-teacher" className="btn btn-primary btn-md mt-2">
            Add Teacher
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ViewTeacher
