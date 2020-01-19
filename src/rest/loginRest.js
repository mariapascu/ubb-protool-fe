import {students} from "../mockings/StudentMock";
import {baseHeader, baseUrlServer} from "../shared/NetworkSettings";


const baseUrl = baseUrlServer;

export function getUserByUsernameAndPassword(username, password) {
    const url = baseUrl + "login/email-and-password";
    return fetch(url, {
        method: 'POST',
        headers: baseHeader,
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
        return data;
    }).catch((err) => {
        console.log(err.message)
    });
}
