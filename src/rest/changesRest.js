import React from "react";
import {MessageStudent} from "../model/MessageStudent";
import Change from "../model/Change";
import CourseClass from "../model/CourseClass";
import Course from "../model/Course";
import {Subgroup} from "../model/Subgroup";
import {Teacher} from "../model/Teacher";
import {Student} from "../model/Student";
import {MessageTeacher} from "../model/MessageTeacher";
import {baseUrlServer} from "../shared/NetworkSettings";
import {getDayNumber, getTeacherById2} from "./userRest";


const baseUrl = baseUrlServer;
let url = "";

function getCourseById2(lista,id){
    for (var i in lista){
        if (lista[i].courseId === id){
            var co=new Course(lista[i].courseId,lista[i].courseName,lista[i].courseUniversity,lista[i].courseFaculty,
                lista[i].courseStartDate,lista[i].courseEndDate);
            return co;
        }
    }
}

function getClassById(lista,id,teacherL,courseL,sub){
    for (var i in lista){
        if (lista[i].classId === id ){
            console.log(lista[i])
            var c = new CourseClass();
            c.classId=lista[i].classId
            c.classType=lista[i].classType
            c.classWeek=lista[i].classWeek
            c.classDay = getDayNumber(lista[i].classDay)
            c.classHour = Number(lista[i].classHour.substring(0, 2))
            c.classLocation=lista[i].classLocation
            c.teacher = getTeacherById2(teacherL,lista[i].teacherId)
            c.subgroup = sub
            c.course = getCourseById2(courseL,lista[i].courseId)
            return c;
        }
    }
}


export function getChangesForStudent(student) {
    let urlForChanges = baseUrl + "change/get-changes-by-student-id/" + student.studentId;
    return fetch(baseUrl + "class/list", {
        method: "GET"
    }).then((r)=>{return r.json()})
        .then((classes)=>{
            return fetch(baseUrl+"course/list",{
                method:'GET'
            }).then((r) => {return r.json()})
                .then((courses)=>{
                    return fetch(baseUrl+"teacher/list",{
                        method:'GET'
                    }).then((r)=>{return r.json()})
                        .then((teachers)=>{
                            return fetch(urlForChanges,{
                                method:'GET'
                            }).then((r)=>{return r.json()})
                                .then((changes)=>{
                                    var result=[]
                                    for (var i in changes){
                                        console.log(changes)
                                        console.log(classes)
                                        var change=new Change()

                                        change.permanentChange = Date.parse(changes[i].endDate) - Date.parse(changes[i].startDate) > 518400000;
                                        var courseClass = getClassById(classes,changes[i].universityClassId,teachers,courses,student.subgroup)
                                        change.courseClass = courseClass
                                        //console.log(courseClass.classDay)
                                        change.toTheDate= "Day: "+courseClass.classDay + " hour: " + courseClass.classHour;
                                        change.fromTheDate = ""; //ramane gol deocamdata, nu stim cum sa luam from date-ul.
                                        change.student = student
                                        change.messageText = "";
                                        change.status = changes[i].changeStatus;
                                        change.changeId = changes[i].changeId;
                                        result.push(change)
                                    }
                                    return result;


                                })
                        })
                })
        })


}



export function getMessagesForTeacher(teacherId) {
    url = baseUrl + "teacher/get-messages" + teacherId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            const messages = data;
            let messagesTeacher = [];

            messages.forEach(myFunction);

            function myFunction(item, index) {
                let messageTeacher = new MessageTeacher();

                //messageTeacher.change = getChangeById(item.changeId);
                messageTeacher.messageId = item.messageId;
                messageTeacher.status = messageTeacher.change.status;
                messageTeacher.messageText = item.messageText;

                messagesTeacher.push(messageTeacher)
            }

            return messagesTeacher
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function getCourseClassById(courseClassId) {
    url = baseUrl + "class/get-by-id/" + courseClassId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let courseClass = new CourseClass();

            courseClass.classHour = data.classHour;
            courseClass.classDay = data.classDay;
            courseClass.course = getCourseById(data.courseId);
            courseClass.classDuration = data.classDuration;
            courseClass.classId = data.classId;
            courseClass.classLocation = data.classLocation;
            courseClass.classType = data.classType;
            courseClass.classWeek = data.classWeek;
            courseClass.subgroup = getSubgroupById(data.subgroupId);
            courseClass.teacher = getTeacherById(data.teacherId);

            return courseClass;

        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function getCourseById(courseId) {
    url = baseUrl + "course/get-by-id/" + courseId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let course = new Course();

            course.courseId = data.courseId;
            course.courseName = data.courseName;
            course.endDate = data.courseEndDate;
            course.fac = data.courseFaculty;
            course.semester = data.courseSemester;
            course.startDate = data.courseStartDate;
            course.uni = course.courseUniversity;

            return course;
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function getSubgroupById(subgroupId) {
    url = baseUrl + "subgroup/get-by-id/" + subgroupId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let subgroup = new Subgroup();

            subgroup.subgroupId = data.subgroupId;
            subgroup.subgroupNumber = data.subgroupNumber;
            subgroup.groupNumber = data.groupNumber;

            return subgroup;
        })
        .catch((err) => {
            console.log(err.message)
        })
}


export function getTeacherById(teacherId) {
    url = baseUrl + "teacher/get-by-id/" + teacherId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let teacher = new Teacher();

            teacher.teacherId = data.teacherId;
            teacher.firstname = data.teacherFirstName;
            teacher.lastname = data.teacherLastName;
            teacher.department = data.teacherDepartment;
            teacher.fac = data.teacherFaculty;
            teacher.site = data.teacherWebSite;
            teacher.teacherEmail = data.email;
            teacher.thesisAvailability = data.teacherAvailability;
            teacher.uni = data.teacherUniversity;

            return teacher;
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function getStudentById(studentId) {
    url = baseUrl + "student/get-by-id/" + studentId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let student = new Student();

            student.studentId = data.studentId;
            student.firstName = data.firstName;
            student.subgroup = getSubgroupById(data.subgroupId);
            student.lastName = data.lastName;
            student.email = data.email;
            student.fac = data.faculty;
            student.major = data.major;
            student.uni = data.university;

            return student;
        })
        .catch((err) => {
            console.log(err.message)
        })
}

