export class Teacher{
    constructor(teacherId,department,thesisAvailability,firstName,lastName,email,password,uni,fac){
        this.teacherId = teacherId
        this.department = department
        this.thesisAvailability=thesisAvailability
        this.firstname=firstName
        this.lastname=lastName
        this.teacherEmail = email;
        this.teacherPassword = password;

        this.uni = uni
        this.fac = fac
    }
}