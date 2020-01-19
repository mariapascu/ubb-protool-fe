import {classess} from "../mockings/ClassMock"
import {Teacher} from "../model/Teacher";
import {Class} from "@material-ui/icons";
import CourseClass from "../model/CourseClass";
import Course from "../model/Course";
import {Subgroup} from "../model/Subgroup";
import {baseHeader, baseUrlServer} from "../shared/NetworkSettings";

const baseUrl = baseUrlServer;
var url;

export function getTeacherById2(tList, tId) {
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

export function getDayNumber(dayString) {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"]
    for (var i = 1; i < 6; i++) {
        if (days[i - 1] === dayString) {
            return i;
        }
    }
}

export function getClassesForStudent(userId) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    //const weekDate = yyyy + '-' + mm + '-' + dd;
    const weekDate = "2019-10-02"
    url = baseUrl + "class/getScheduleStudent/" + userId + "/" + weekDate;

    return fetch(baseUrl + "course/list", {
        method: 'GET'
    }).then((r) => {
        return r.json()
    })
        .then((data) => {
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
                    return fetch(baseUrl + "subgroup/list", {
                        method: 'GET'
                    }).then((r) => {
                        return r.json()
                    })
                        .then((subgroups) => {
                            return fetch(url, {
                                method: 'GET',
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
                                                const teacher = getTeacherById2(teachers, data[i].teacherId)
                                                const subgroup = getSubgroupById(subgroups, data[i].subgroupId)

                                                const hourr = Number(data[i].classHour.substring(0, 2))
                                                var c = new CourseClass(data[i].classId, teacher, courses[j], subgroup, data[i].classType, dayNr, data[i].classWeek, hourr, data[i].classLocation, data[i].classDuration)

                                                cls.push(c)
                                            }
                                        }


                                    }
                                    console.log(cls)
                                    return cls
                                })
                                .catch((err) => {
                                    console.log(err.message)
                                })
                        })


                })


        })

}

export function getClassesForTeacher(teacher) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    //const weekDate = yyyy + '-' + mm + '-' + dd;
    const weekDate = "2019-10-02"
    url = baseUrl + "class/getScheduleTeacher/" + teacher.teacherId + "/" + weekDate;

    return fetch(baseUrl + "course/list", {
        method: 'GET'
    }).then((r) => {
        return r.json()
    })
        .then((data) => {
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
                    return fetch(baseUrl + "subgroup/list", {
                        method: 'GET'
                    }).then((r) => {
                        return r.json()
                    })
                        .then((subgroups) => {
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
                                                const subgroup = getSubgroupById(subgroups, data[i].subgroupId)

                                                const hourr = Number(data[i].classHour.substring(0, 2))
                                                var c = new CourseClass(data[i].classId, teacher, courses[j], subgroup, data[i].classType, dayNr, data[i].classWeek, hourr, data[i].classLocation, data[i].classDuration)

                                                cls.push(c)
                                            }
                                        }


                                    }
                                    console.log(cls)
                                    return cls
                                })
                                .catch((err) => {
                                    console.log(err.message)
                                })
                        })


                })


        })

}


function getAllCourses() {
    url = baseUrl + "course/list"
    return fetch(url, {
        method: 'GET'
    }).then((r) => {
        return r.json()
    })
        .then((data) => {
            console.log(data[0]["courseId"])
            var courses = [];
            for (var c in data) {

                var co = new Course(data[c]["courseId"], data[c]["courseName"], data[c]["courseSemester"], data[c]["courseUniversity"], data[c]["courseFaculty"], data[c]["courseStartDate"], data[c]["courseEndDate"])

                courses.push(co)
            }
            return courses;
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
    url = baseUrl + classId;
    return fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data; //list of students
    })
}

export function updateStudent(body) {
    url = baseUrl + "student/updateStudent";
    return fetch(url, {
        method: 'POST',
        headers: baseHeader,
        body: body
    }).then((response) => {
        console.log(response.status);
        if (response.status === 200 || response.status === 302) {
            return 1
        } else
            return 0
    }).then((data) => {
        return data
    })
}

export function updateTeacher(body) {
    url = baseUrl + "/teacher/updateTeacher";
    return fetch(url, {
        method: 'POST',
        headers: baseHeader,
        body: body
    }).then((response) => {
        if (response.status === 200 || response.status === 302) {
            return 1
        } else return 0
    }).then((data) => {
        return data
    })
}


export function addChange(studentId, firstName, lastName, groupId, subgroupId) {
    //post
}

export function registerStudent(firstName, lastName, email, password, uni, fac, spec, group, subgroup) {
    //post
}



