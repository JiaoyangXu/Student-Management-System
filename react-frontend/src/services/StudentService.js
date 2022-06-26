import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8888/api/v1/students"

class StudentService {

    getStudents() {
        return axios.get(STUDENT_API_BASE_URL)
    }

    createStudents(student) {
        return axios.post(STUDENT_API_BASE_URL, student)
    }

    getStudentById(id) {
        return axios.get(STUDENT_API_BASE_URL + "/" + id)
    }

    updateStudentById(id, student) {
        return axios.put(STUDENT_API_BASE_URL + "/" + id, student)
    }
}


export default new StudentService()