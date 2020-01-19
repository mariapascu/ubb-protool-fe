import CourseClass from "../model/CourseClass";
import {baseUrlServer} from "../shared/NetworkSettings";
import Course from "../model/Course";
import {Teacher} from "../model/Teacher";
import {Subgroup} from "../model/Subgroup";

let baseUrl = baseUrlServer;

function getDayNumber(dayString) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    for (var i = 1; i < 6; i++) {
        if (days[i - 1] === dayString) {
            return i;
        }
    }
}

function getTeacherById(tList, tId) {
    for (var i in tList) {
        if (tList[i].teacherId === tId) {
            return new Teacher(tList[i].teacherId, tList[i].teacherDepartment, tList[i].teacherAvailability, tList[i].teacherFirstName, tList[i].teacherLastName,
                tList[i].email, tList[i].teacherUniversity, tList[i].teacherFaculty, tList[i].teacherWebSite)
        }
    }
}

function getSubgroupById(lista, id) {
    for (var i in lista) {
        if (lista[i].subgroupId === id) {
            return new Subgroup(lista[i].subgroupId, lista[i].groupNumber, lista[i].groupNumber)
        }
    }
}

export function getChangelistFromClass(classId, date) {
    const url = baseUrl + "class/getPosiibleClassesForChanged/" + classId + "/" + date;
    return fetch(baseUrl + "course/list", {
        method: 'GET'
    }).then((r) => {
        return r.json()
    })
        .then((data) => {
            console.log("courses " + data)
            var courses = []
            for (var c in data) {

                var co = new Course(data[c]["courseId"], data[c]["courseName"], data[c]["courseSemester"], data[c]["courseUniversity"], data[c]["courseFaculty"], data[c]["courseStartDate"], data[c]["courseEndDate"])

                courses.push(co)
            }
            return fetch(baseUrl + "teacher/list", {
                method: 'GET'

            }).then((r) => {
                return r.json()
            })
                .then((teachers) => {
                    console.log("teachers " + teachers);
                    return fetch(baseUrl + "subgroup/list", {
                        method: 'GET'
                    }).then((r) => {
                        return r.json()
                    })
                        .then((subgroups) => {
                            console.log("subgroup" + subgroups);
                            return fetch(url, {
                                method: 'POST',
                            }).then((response) => {
                                return response.json();
                            })
                                .then((data) => {
                                    console.log(data)
                                    var cls = []
                                    for (var i in data) {

                                        for (var j in courses) {
                                            if (courses[j].courseId === data[i].courseId) {
                                                console.log("add")
                                                const dayNr = getDayNumber(data[i].classDay)
                                                const teacher = getTeacherById(teachers, data[i].teacherId)
                                                const subgroup = getSubgroupById(subgroups, data[i].subgroupId)

                                                const hourr = Number(data[i].classHour.substring(0, 2))
                                                var c = new CourseClass(data[i].classId, teacher, courses[j], subgroup, data[i].classType, dayNr, data[i].classWeek, hourr, data[i].classLocation, data[i].classDuration)

                                                cls.push(c)
                                                break;
                                            }
                                        }


                                    }
                                    console.log("clsss" + cls)
                                    return cls
                                })
                                .catch((err) => {
                                    console.log(err.message)
                                })
                        })


                })


        })
}
