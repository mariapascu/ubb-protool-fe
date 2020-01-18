const baseUrl = "http://localhost:8080/"

export function createStudent(firstName, lastName, email, password, major, university,
                              faculty, studentGroup, studentSubGroup) {
    const url = baseUrl + "student/saveStudent";
    return fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            major: major,
            university: university,
            faculty: faculty,
            studentGroup: studentGroup,
            studentSubGroup: studentSubGroup
        })

    }).then((response) => {
        return response.json()
    })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err)
        });
}

export function createTeacher(teacherDepartment, teacherAvailability, teacherFirstName, teacherLastName, email, password, teacherUniversity, teacherFaculty, teacherWebSite) {
    const url = baseUrl + "teacher/saveTeacher";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            teacherDepartment: teacherDepartment,
            teacherAvailability: teacherAvailability,
            teacherFirstName: teacherFirstName,
            teacherLastName: teacherLastName,
            email: email,
            password: password,
            teacherEnabled: true,
            teacherUniversity: teacherUniversity,
            teacherFaculty: teacherFaculty,
            teacherWebSite: teacherWebSite
        })
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.log(err));
}