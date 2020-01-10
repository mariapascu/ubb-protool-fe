export default class CourseClass{
    /*
    id - int
    teacher - entity Teacher
    courseID - int
    subgroup - int
    type - (lab/seminar) string
    day- int (1-Monday, 2-Tuesday etc) -> have to convert when coming from backend to transform "Monday" to 1 etc.
    week - 0 -> bath
            1->odd
            2->even
    hour- int
    location - string
     */
    constructor(classId,teacher,courseId,subgroup,classType,classDay,classWeek,classHour,classLocation,duration){
        this.classId = classId;
        this.teacher = teacher;
        this.courseId = courseId;
        this.subgroup = subgroup;
        this.classType = classType;
        this.classDay = classDay;
        this.classWeek = classWeek;
        this.classHour = classHour;
        this.classLocation = classLocation;
        this.classDuration = duration
    }
}