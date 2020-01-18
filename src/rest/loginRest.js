import {students} from "../mockings/StudentMock";


const baseUrl = "http://localhost:8080/"

export function getUserByUsernameAndPassword(username, password) {
    //const url = baseUrl + "login/username+password;
    const url = "http://api.plos.org/search?q=title:DNA";
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        // if (data.studentId == null) {
        //     //transform data in teacher
        // }
        // else {
        //     //transform data in student
        // }
        return students[0];
    }).catch((err) => {
        console.log(err.message)
    });
}