export default class Change {
    constructor(changeId, student, courseClass, messageText, fromDate, toTheDate, permanentChange, status) {
        this.changeId = changeId;
        this.student = student;
        this.courseClass = courseClass;
        this.messageText = messageText;
        this.fromTheDate = fromDate;
        this.toTheDate = toTheDate;
        this.permanentChange = permanentChange;
        this.status = status;
    }
}