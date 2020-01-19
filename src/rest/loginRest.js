import {students} from "../mockings/StudentMock";
import {getSubgroupById} from "./changesRest";
import {Student} from "../model/Student";
import {Teacher} from "../model/Teacher";


const baseUrl = "http://localhost:8080/"

export function getUserByUsernameAndPassword(username, password) {
    const url = baseUrl + "login/email-and-password";
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password,
        })
    }).then((response) => {
        console.log(response);
        if (response.status === 302)
            return response.json();
        else {
            return null;
        }
    }).then((data) => {
        console.log(data.teacherId);
         if (data.studentId == null) {
             //transform data in teacher

             let teacher = new Teacher();
             teacher.teacherId = data.teacherId;
             teacher.department = data.teacherDepartment;
             teacher.thesisAvailability=data.teacherAvailability;
             teacher.firstname=data.teacherFirstName;
             teacher.lastname=data.teacherLastName;
             teacher.teacherEmail = data.email;
             teacher.site = data.teacherWebSite;
             teacher.uni = data.teacherUniversity;
             teacher.fac = data.teacherFaculty;
             console.log(teacher);
             return teacher;
         }

         else {
             let student = new Student();
             student.studentId=data.studentId;
             //student.subgroup;
             student.firstName=data.firstName;
             student.lastName=data.lastName;
             student.email = data.email;
             student.major = data.major;
             student.uni = data.university;
             student.fac = data.faculty;
             return getSubgroupById(data.subgroupId).then((subgroup) => {
                 console.log(subgroup);
                student.subgroup = subgroup;
                return student;
             });
             /*console.log(student);
             return student;*/
         }
    }).catch((err) => {
        console.log(err.message)
    });
}