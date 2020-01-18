export default class Course {
    constructor(courseId, name, semester, uni, fac, startDate, endDate) {
        this.courseId = courseId;
        this.courseName = name;
        this.semester = semester;
        this.uni = uni;
        this.fac = fac;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}