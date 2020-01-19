import {Student} from "../model/Student";
import {Subgroup} from "../model/Subgroup";

const baseUrl = "http://localhost:8080/";

export function getStudentsListForClass(classId) {
    let url = baseUrl + "class/get-all-students-by-class-id/" + classId;
    let url2 = baseUrl + "subgroup/list";
    return fetch(url2, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
    }).then((r) => {
        return r.json();
    }).then((subgroups) => {
        console.log(subgroups);
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then((response) => {
            console.log("response " + JSON.stringify(response));
            return response.json();
        })
            .then((data) => {

                let studentsList = [];

                for (let i = 0; i < data.length; i++) {
                    var item = data[i];
                    console.log("obj" + item);
                    var student = new Student(item.studentId, data[i].firstName, getSubgroupById(subgroups, item.subgroupId), item.lastName,
                        item.email, item.faculty, item.major, item.university);

                    // student.studentId = item.studentId;
                    // student.firstName = item.firstName;
                    // student.subgroup = getSubgroupById(subgroups, data.subgroupId);
                    // student.lastName = item.lastName;
                    // student.email = item.email;
                    // student.fac = item.faculty;
                    // student.major = item.major;
                    // student.uni = item.university;
                    console.log("student " + student.firstName)
                    studentsList.push(student)
                }
                console.log("student list" + studentsList);
                return studentsList;
            })
            .catch((err) => {
                console.log(err.message)
            })
    });
}

function getSubgroupById(list, id) {
    for (var i in list) {
        if (list[i].subgroupId === id) {
            return new Subgroup(list[i].subgroupId, list[i].groupNumber, list[i].groupNumber)
        }
    }
}