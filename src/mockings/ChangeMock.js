import Change from "../model/Change";
import {Student} from "../model/Student";
import CourseClass from "../model/CourseClass";
import {Teacher} from "../model/Teacher";
import Course from "../model/Course";
import {students} from "./StudentMock";
import {teachers} from "./TeacherMock";
import {courses} from "./CourseMock";
import {classess} from "./ClassMock";

const c1 = new Change(
    1,
    students[0],
    classess[0],
    "Buna ziua vreau sa ma mut",
    "Joi 14:00",
    "Vineri 12:00"
);

const c2 =  new Change(
    2,
    students[1],
    classess[1],
    "Buna ziua la revedere",
    "Luni 12:00",
    "Vineri 16:00"
);

export const changes = [c1, c2];