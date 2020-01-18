import {changes} from "./ChangeMock";

export class MessageStudent {
    constructor(messageId, status, change) {
        this.messageId = messageId;
        this.change = change;
        this.status = status;
    }
}

const m1 = new MessageStudent(1, "Not", changes[0]);
const m2 = new MessageStudent(2, "Declined", changes[1]);

export const messagesStudent = [m1, m2];