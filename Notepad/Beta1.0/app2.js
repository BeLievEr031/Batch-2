
function setDateFormates() {
    const date = new Date();
    // let formate4 = date.toLocaleDateString();
    // const splittedF4 = formate4.split("/")
    // console.log(splittedF4);

    // // Month
    // if (Number(splittedF4[0]) < 9) {
    //     splittedF4[0] = "0" + splittedF4[0]
    // }

    // // Date
    // if (Number(splittedF4[1]) < 9) {
    //     splittedF4[1] = "0" + splittedF4[1]
    // }


    // formate4 = splittedF4.join("/");
    // let formate2 = splittedF4.reverse().join("-");


    const formate3 = date.toLocaleTimeString();
    const splittedF3 = formate3.split(" ");
    const amOrpm = splittedF3[1];

    if (amOrpm === "PM") {
        const time = splittedF3[0];
        // console.log(time);
        const timeArr = time.split(":")
        console.log(timeArr);
        timeArr[0] = Number(timeArr[0]) + 12;
        console.log(timeArr.join(":"));

    }


}

setDateFormates();