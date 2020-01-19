import {students} from "../mockings/StudentMock";


const baseUrl = "http://192.168.3.26:8080/";

export function getUserByUsernameAndPassword(username, password) {
    const url = baseUrl + "login/email-and-password";
    const j = JSON.stringify({
        email: username,
        password: password
    });
    console.log(j);
    console.log(username + password);
    return fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: j
    }).then((response) => {
        // if(response.status === 200){
            return response.json()
        // }
        // else return null;
    }).then((data) => {
        console.log(JSON.stringify(data) + "   AICICICICICICICI");
        // if (data.studentId == null) {
        //     //transform data in teacher
        // }
        // else {
        //     //transform data in student
        // }
        return students[0];
    }).catch((err) => {
        console.log(err)
    });
}
