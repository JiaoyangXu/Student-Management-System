import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentService from '../services/StudentService';

import { useHistory } from "react-router-dom";


export default class ListStudentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      students: []
    }
    this.addStudent = this.addStudent.bind(this);
  }


  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    })
  }

  addStudent() {
    window.location.href = '/add-student'
  }



  render() {
    return (
      <div>
        <h2 className="text-center"> StudentList</h2>
        
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addStudent}>
            Add Student
          </button>
        </div>
        
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
