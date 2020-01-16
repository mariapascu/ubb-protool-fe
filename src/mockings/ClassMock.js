import CourseClass from "../model/CourseClass";
import {teachers} from "./TeacherMock"
import {courses} from "./CourseMock"
const teacherss=teachers   //length 9: 0...6
const co=courses    //0..8

const c1=new CourseClass(1,teacherss[1],co[1],2,"Laboratory",1,1,10,"C310",2)
const c2=new CourseClass(2,teacherss[5],co[2],1,"Seminar",2,0,10,"C001",2)
const c3=new CourseClass(3,teacherss[0],co[6],1,"Laboratory",2,0,14,"C301",2)
const c4=new CourseClass(4,teacherss[6],co[4],2,"Course",2,0,16,"A2",3)
const c5=new CourseClass(5,teacherss[6],co[5],1,"Laboratory",3,2,14,"C321",2)
const c6=new CourseClass(6,teacherss[5],co[0],2,"Seminar",4,0,10,"C510",2)
const c7=new CourseClass(7,teacherss[4],co[0],2,"Seminar",5,0,10,"C512",1)
const c8=new CourseClass(8,teacherss[3],co[8],1,"Course",4,1,18,"A1",3)
const c9=new CourseClass(9,teacherss[2],co[7],2,"Laboratory",4,2,12,"C310",2)
export const classess=[c1,c2,c3,c4,c5,c6,c7,c8,c9]