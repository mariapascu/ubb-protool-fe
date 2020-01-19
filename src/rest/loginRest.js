import {students} from "../mockings/StudentMock";


const baseUrl = "http://localhost:8080/"

export function getUserByUsernameAndPassword(username, password) {
    const url = baseUrl + "login/email-and-password";
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password,
        })
    }).then((response) => {
        console.log(response);
        if (response.status === 302)
            return response.json();
        else {
            return null;
        }
    }).then((data) => {
        console.log(data["studentId"]);
         // if (data.studentId == null) {
         //     //transform data in teacher
         //
         //     let teacher = new Teacher();
         //     return teacher;
         // }
         // else {
         //     //transform data in student
         // }
        return data;
    }).catch((err) => {
        console.log(err.message)
    });
}
