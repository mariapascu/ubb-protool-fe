import {changes} from "./ChangeMock";

export class MessageTeacher {
    constructor(messageId, status, change) {
        this.messageId = messageId;
        this.change = change;
        this.status = status;
    }
}

const m1 = new MessageTeacher(1, "Accepted", changes[0], "Bunaziua vreau s ama mut");
const m2 = new MessageTeacher(2, "Pending", changes[1], "Bunaziua vreau s ama mut");

export const messagesTeachers = [m1, m2];