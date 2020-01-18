import {Student} from "../model/Student";
import {subgroups} from "./SubgroupMock";

const s1 = new Student(
    1,
    subgroups[0],
    "Cezar",
    "Olteanu",
    "cezar@scs.com",
    "Specializarea",
    "UBB",
    "Mate info"
);

const s2 = new Student(
    2,
    subgroups[1],
    "Ion",
    "Bula",
    "bula@scs.com",
    "Specializarea",
    "UBB",
    "Mate info"
);

export const students = [s1, s2, s1, s2, s1, s2, s1, s2, s1, s2];

