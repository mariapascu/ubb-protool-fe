import {getStudentById, getSubgroupById} from "./changesRest";
import {Student} from "../model/Student";

const baseUrl = "http://localhost:8080/";
let url;

export function getStudentsListForClass(classId) {
    url = baseUrl + "class/getAllStudentsByClassId/" + classId;

    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {

            let studentsList = [];

            data.forEach(myFunction);

            function myFunction(item, index) {

                let student = new Student();

                student.studentId = item.studentId;
                student.firstName = item.firstName;
                student.subgroup = getSubgroupById(data.subgroupId);
                student.lastName = item.lastName;
                student.email = item.email;
                student.fac = item.faculty;
                student.major = item.major;
                student.uni = item.university;

                studentsList.push(student)
            }

            return studentsList;
        })
        .catch((err) => {
            console.log(err.message)
        })
}
