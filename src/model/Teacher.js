export class Teacher{
    constructor(teacherId,department,thesisAvailability,firstName,lastName,email,uni,fac,site){
        this.teacherId = teacherId
        this.department = department
        this.thesisAvailability=thesisAvailability
        this.firstName=firstName
        this.lastName=lastName
        this.teacherEmail = email;
        this.site = site

        this.uni = uni
        this.fac = fac
    }
}