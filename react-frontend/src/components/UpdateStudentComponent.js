import React, { Component } from 'react'
import {
    useParams
} from "react-router-dom";

import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then((res) => {
            let student = res.data;
            this.setState({ firstName: student.firstName, lastName: student.lastName, emailId: student.emailId });
        })
    }

    updateStudent = (e) => {
        e.preventDefault();

        let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('student => ' + JSON.stringify(student));
        StudentService.updateStudentById(this.state.id, student)
        window.location.href = '/student'
    }
    cancel() {
        //console.log("cancel")
        window.location.href = '/student'
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }




    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'> Update Employee</h3>
                        <div className='card-body'>

                            <form>
                                <div className='form-group'>
                                    <label> First Name </label>
                                    <input placeholder='First Name' name='firstName' className='form-control'
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>

                                <div className='form-group'>
                                    <label> Last Name </label>
                                    <input placeholder='Last Name' name='lastName' className='form-control'
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>

                                <div className='form-group'>
                                    <label> Email Address: </label>
                                    <input placeholder='Email Address' name='emailId' className='form-control'
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                </div>
                            </form>

                            <button className='btn btn-success' onClick={this.updateStudent}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default (props) => (
    <UpdateStudentComponent
        {...props}
        params={useParams()}
    />
);
