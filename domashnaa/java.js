//https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
async function getStudents(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        function getFullName() {
            data.forEach((student) => {
                console.log(`FULLNAME: ${student.firstName} ${student.lastName}`);
            });
            return data
                .map((student) => `${student.firstName} ${student.lastName}`)
                .join("<br>");
        }

        function averageGrade() {
            const gradesFromTo = data.sort((a, b) => a.averageGrade - b.averageGrade);
            return gradesFromTo
                .map((student) => {
                    console.log(
                        `Firstname: ${student.firstName} || Averagegrade: ${student.averageGrade}`
                    );
                    return `${student.firstName} || Averagegrade: ${student.averageGrade}`;
                })
                .join("<br>");
        }

        function higherThanThree() {
            const higherThanThree = data.filter((student) => student.averageGrade >= 3);
            return higherThanThree
                .map((student) => {
                    console.log(
                        `${student.firstName} || Averagegrade: ${student.averageGrade}`
                    );
                    return `${student.firstName} || Averagegrade: ${student.averageGrade}`;
                })
                .join("<br>");
        }

        function femaleFive() {
            const femaleGradeFive = data.filter(
                (student) => student.gender === `Female` && student.averageGrade === 5
            );
            return femaleGradeFive
                .map((student) => {
                    console.log(
                        `${student.firstName} || Averagegrade: ${student.averageGrade}`
                    );

                    return `${student.firstName} || Averagegrade: ${student.averageGrade}`;
                })
                .join("<br>");
        }

        function maleSkopje18() {
            const maleSkopje18 = data.filter(
                (student) =>
                    student.gender === `Male` &&
                    student.city === "Skopje" &&
                    student.age >= 18
            );
            return maleSkopje18
                .map((student) => {
                    console.log(
                        `Fullname: ${student.firstName} ${student.lastName} || Gender: ${student.gender} || City: ${student.city} || Age: ${student.age}`
                    );

                    return `Fullname: ${student.firstName} ${student.lastName} || Gender: ${student.gender} || City: ${student.city} || Age: ${student.age}`;
                })
                .join("<br>");
        }

        function femaleGrade24() {
            const femaleGrade24 = data.filter(
                (student) => student.gender === `Female` && student.age >= 24
            );
            return femaleGrade24
                .map((student) => {
                    console.log(
                        `Firstname: ${student.firstName} || Age: ${student.age} || Averagegrade: ${student.averageGrade}`
                    );

                    return `Firstname: ${student.firstName} || Age: ${student.age} || Averagegrade: ${student.averageGrade}`;
                })
                .join("<br>");
        }

        function maleWithB() {
            const maleWithB = data.filter(
                (student) =>
                    student.gender === "Male" &&
                    student.firstName[0] === "B" &&
                    student.averageGrade >= 2
            );
            maleWithB.sort((a, b) => a.averageGrade - b.averageGrade);
            return maleWithB
                .map((student) => {
                    console.log(
                        `Firstname: ${student.firstName} || Averagegrade: ${student.averageGrade}`
                    );

                    return `Firstname: ${student.firstName} || Averagegrade: ${student.averageGrade}`;
                })
                .join("<br>");
        }

        function htmlPrint() {
            let printFullName = document.getElementById("fullname");
            printFullName.innerHTML = getFullName();
            let printAverageGrade = document.getElementById("averagegrade");
            printAverageGrade.innerHTML = averageGrade();
            let printHigherThanThree = document.getElementById("higherThanThree");
            printHigherThanThree.innerHTML = higherThanThree();
            let printFemaleFive = document.getElementById("femaleGradeFive");
            printFemaleFive.innerHTML = femaleFive();
            let printMaleSkopje18 = document.getElementById("maleSkopje18");
            printMaleSkopje18.innerHTML = maleSkopje18();
            let printFemaleGrade24 = document.getElementById("femaleGrade24");
            printFemaleGrade24.innerHTML = femaleGrade24();
            let printMaleWithB = document.getElementById("maleWithB");
            printMaleWithB.innerHTML = maleWithB();
        }
        htmlPrint();
    } catch (error) {
        console.error(error);
    }
}
console.log(
    getStudents(
        "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    )
);