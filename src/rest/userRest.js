import {classess} from "../mockings/ClassMock"
import {Teacher} from "../model/Teacher";

const baseUrl = "http://localhost:8080/"
var url

export function getClassesForWeek(userId, weekDate) {
    url = baseUrl + userId + "/" + weekDate;
    return fetch('http://localhost:8080/api/recipes', {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            return classess
            console.log(classess)
            // return data; //array of classes
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function getAllTeachers() {
    url = baseUrl + "teacher/list"
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            return data; //list of teachers
        })
        .catch((err) => {
            console.log(err.message)
        })

}

// export function getClassesForWeek2(courseId, classType, weekDate){
//     url=baseUrl+courseId+"/"+classType+"/"+weekDate
//     return fetch(url,{
//         method:'GET'
//     }).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         return data; //lista de clase de acel tip, de la acel curs, in acea saptamana
//     })
// }


export function getChangesOfCourse(courseId) {
    url = baseUrl + courseId
    return fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data; //lista de change-uri
    })
}

export function getChangesOfUser(userId) {
    url = baseUrl + userId
    return fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data; //lista de change-uri
    })

}

export function getClassesWithChanges(userId, subgroupId, weekDate) {
    url = baseUrl + userId + "/" + subgroupId + "/" + weekDate
    return fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data; //lista de classes
    })
}

export function getStudentsForClass(classId) {
    url = baseUrl + classId
    return fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data; //list of students
    })
}

export function addChange(studentId, firstName, lastName, groupId, subgroupId) {
    //post
}

export function registerStudent(firstName, lastName, email, password, uni, fac, spec, group, subgroup) {
    //post
}



