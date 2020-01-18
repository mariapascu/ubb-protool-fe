import {Student} from "../model/Student";
import {Subgroup} from "../model/Subgroup";


let subgroup = new Subgroup(1,935,2);

export const s1 = new Student(
    1,
    subgroup,
    "Cezar",
    "Olteanu",
    "cezar@scs.com",
    "Specializarea",
    "UBB",
    "Mate info"
);

const s2 = new Student(
    2,
    "935/2",
    "Ion",
    "Bula",
    "bula@scs.com",
    "Specializarea",
    "UBB",
    "Mate info"
);

export const students = [s1, s2, s1, s2, s1, s2, s1, s2, s1, s2];

