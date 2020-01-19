import {classess} from "../mockings/ClassMock"
import {Teacher} from "../model/Teacher";
import {Class} from "@material-ui/icons";
import CourseClass from "../model/CourseClass";
import Course from "../model/Course";

const baseUrl = "http://localhost:8080/"
var url;

function getDayNumber(dayString){
    const days=["Monday","Tuesday","Wednesday","Thursday","Friday"]
    for (var i=1;i<6;i++ ){
        if (days[i-1]===dayString){
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
    const weekDate="2019-11-12"
    url = baseUrl + "class/getScheduleStudent/"+userId + "/" + weekDate;

    return fetch(baseUrl+"course/list",{
        method:'GET'
    }).then((r)=>{return r.json()})
        .then((data)=>{
            console.log(data[0]["courseId"])
            var courses=[];
            for (var c in data){

                var co=new Course(data[c]["courseId"],data[c]["courseName"],data[c]["courseSemester"],data[c]["courseUniversity"],data[c]["courseFaculty"],data[c]["courseStartDate"],data[c]["courseEndDate"])

                courses.push(co)
            }

            return fetch(url, {
                method: 'POST',
            }).then((response) => {
                return response.json();
            })
                .then((data) => {

                    var cls=[]
                    for (var i in data){

                            for (var i in courses){
                                if (courses[i].courseId === data[i].courseId){
                                    const dayNr = getDayNumber(data[i].classDay)
                                    const hourr=Number(data[i].classHour.substring(0,2))
                                    var c=new CourseClass(data[i].classId,classess[0].teacher,courses[i],classess[0].subgroup,"Laboratory",dayNr,data[i].classWeek,hourr,data[i].classLocation,data[i].classDuration)

                                    cls.push(c)
                                }
                            }



                    }
                    return cls
                })
                .catch((err) => {
                    console.log(err.message)
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
            console.log(data[0]["courseId"])
            var courses = [];
            for (var c in data) {

                var co = new Course(data[c]["courseId"], data[c]["courseName"], data[c]["courseSemester"], data[c]["courseUniversity"], data[c]["courseFaculty"], data[c]["courseStartDate"], data[c]["courseEndDate"])

                courses.push(co)
            }

            return fetch(url, {
                method: 'POST',
            }).then((response) => {
                return response.json();
            })
                .then((data) => {

                    var cls = []
                    for (var i in data) {

                        for (var j in courses) {
                            if (courses[j].courseId === data[i].courseId) {
                                const dayNr = getDayNumber(data[i].classDay)
                                const hourr = Number(data[i].classHour.substring(0, 2))
                                var c = new CourseClass(data[i].classId, teacher, courses[j], classess[0].subgroup, data[i].classType, dayNr, data[i].classWeek, hourr, data[i].classLocation, data[i].classDuration)

                                cls.push(c);
                                break;
                            }
                        }


                    }
                    return cls
                    //return classess
                })
                .catch((err) => {
                    console.log(err.message)
                })
        })
}


function getAllCourses(){
    url = baseUrl+"course/list"
    return fetch(url,{
        method:'GET'
    }).then((r)=>{return r.json()})
    .then((data)=>{
        console.log(data[0]["courseId"])
        var courses=[];
        for (var c in data){

            var co=new Course(data[c]["courseId"],data[c]["courseName"],data[c]["courseSemester"],data[c]["courseUniversity"],data[c]["courseFaculty"],data[c]["courseStartDate"],data[c]["courseEndDate"])

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

export function updateStudent(body){
    url = baseUrl;
    return fetch(url, {
        method: 'UPDATE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: body
    }).then((response) => {
        if(response.status === 200){
            return true
        }
    })
}


export function addChange(studentId, firstName, lastName, groupId, subgroupId) {
    //post
}

export function registerStudent(firstName, lastName, email, password, uni, fac, spec, group, subgroup) {
    //post
}



