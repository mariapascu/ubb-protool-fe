import {baseUrlServer} from "../shared/NetworkSettings";

const baseUrl = baseUrlServer;

export function createChange(changeStatus, startDate, endDate, classId, studentId) {
    const url = baseUrl + "change/saveChange";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            changeStatus : changeStatus,
            startDate : startDate,
            endDate : endDate,
            universityClassId : classId,
            studentId : studentId
        })
    }).then((response) => {return response.json()})
        .then((data) => {
            console.log(data);
            return data.changeId;
        })
        .catch((err) => console.log(err));
}

export function createMessage(messageDate, messageText, changeId) {
    const url = baseUrl + "message/saveMessage";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            messageDate: messageDate,
            messageText: messageText,
            changeId : changeId
        })
    }).then((response) => {return response.json()})
        .then((data) => {return data})
        .catch((err) => console.log(err));
}
