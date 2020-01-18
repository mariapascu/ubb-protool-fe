export class Teacher{
    constructor(teacherId,department,thesisAvailability,firstName,lastName,email,uni,fac,site){
        this.teacherId = teacherId;
        this.department = department;
        this.thesisAvailability=thesisAvailability;
        this.firstname=firstName;
        this.lastname=lastName;
        this.teacherEmail = email;
        this.site = site;
        this.uni = uni;
        this.fac = fac;
    }
}
// teacherBackend = {
//     "teacherId": 6,
//     "teacherDepartment": "dep gelu",
//     "teacherAvailability": true,
//     "teacherFirstName": "Gelu",
//     "teacherLastName": "Gelian",
//     "email": "gelian@cs.ubbcluj.ro",
//     "password": "lapte1234",
//     "teacherEnabled": true,
//     "teacherUniversity": "ubb",
//     "teacherFaculty": "fmi",
//     "teacherWebSite": "cs.ubbcluj.ro/~gelu"
// }
