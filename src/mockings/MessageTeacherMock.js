import {changes} from "./ChangeMock";

export class MessageTeacher {
    constructor(messageId, status, change) {
        this.messageId = messageId;
        this.change = change;
        this.status = status;
    }
}

const m1 = new MessageTeacher(1, "Pending", changes[0]);
const m2 = new MessageTeacher(2, "Pending", changes[1]);

export const messagesTeachers = [m1, m2];