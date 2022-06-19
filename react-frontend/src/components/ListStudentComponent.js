import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentService from '../services/StudentService';

export default class ListStudentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      students: []
    }
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    })
  }


  render() {
    return (
      <div>
        <h2 className="text-center"> StudentList</h2>
        <div className = "row">
          <table className = "table table-striped table-bordered">
            <thead>
              <tr>
                <th> Student First Name</th>
                <th> Student Last Name</th>
                <th> Student Email Id</th>
                <th> Action</th>
              </tr>
            </thead>
    
            <tbody>
              {
                this.state.students.map(
                  students => 
                  <tr key = { students.id }>
                    <td> { students.firstName } </td>
                    <td> { students.lastName } </td>
                    <td> { students.emailId }</td>
                  </tr>
                )
              }
            </tbody>
          </table>

        </div>
        
      </div>
    )
  }
}
