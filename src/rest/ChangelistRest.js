import CourseClass from "../model/CourseClass";
import {getCourseById, getSubgroupById, getTeacherById} from "./changesRest";

const baseUrl = "http://localhost:8080/";

export function getChangelistFromClass(classId, date) {
    const url = url + "class/getPosiibleClassesForChanged/" + classId + "/" + date;
    return fetch(url, {
        method: 'GET'
    }).then((response) => {return response.json()})
        .then((data) => {
            let changelist = [];
            data.forEach(myFunction);

            function myFunction(item, index) {
                let courseClass = new CourseClass();
                courseClass.classId = item.classId;
                courseClass.teacher = getTeacherById(item.teacherId);
                courseClass.course = getCourseById(item.courseId);
                courseClass.subgroup = getSubgroupById(item.subgroupId);
                courseClass.classType = item.classType;
                courseClass.classDay = item.classDay;
                courseClass.classWeek = item.classWeek;
                courseClass.classHour = item.classHour;
                courseClass.classLocation = item.classLocation;
                courseClass.classDuration = item.classDuration;
                changelist.push(courseClass);
            }
            return changelist;

        })
        .catch((err) => (console.log(err)));
}