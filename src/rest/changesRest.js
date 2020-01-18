import React from "react";
import {MessageStudent} from "../model/MessageStudent";
import Change from "../model/Change";
import CourseClass from "../model/CourseClass";
import Course from "../model/Course";
import {Subgroup} from "../model/Subgroup";
import {Teacher} from "../model/Teacher";
import {Student} from "../model/Student";
import {MessageTeacher} from "../model/MessageTeacher";

const baseUrl = "http://localhost:8080/";
let url = "";

export function getChangesForStudent(studentId) {
    url = baseUrl + "student/get-changes" + studentId;
    return fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            const changes = data;
            let messageStudent = new MessageStudent();
            let messagesStudent = [];

            changes.forEach(myFunction);

            function myFunction(item, index) {
                let change = new Change();
                change.permanentChange = item.toDate - item.fromDate > 7;

                change.courseClass = getCourseClassById(item.courseClassId);
                change.toTheDate = change.courseClass.classDay + change.courseClass.classHour;
                change.fromTheDate = ""; //ramane gol deocamdata, nu stim cum sa luam from date-ul.
                change.student = getStudentById(studentId);
                change.messageText = "";
                change.changeId = item.id;

                messageStudent.status = item.status;
                messageStudent.messageId = item.id;
                messageStudent.change = change;
                messagesStudent.push(messageStudent)
            }

            return messagesStudent
        })
        .catch((err) => {
            console.log(err.message)
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

                messageTeacher.change = getChangeById(item.changeId);
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
            student.subgroup = getStudentById(data.subgroupId);
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






