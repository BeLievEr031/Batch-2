const leftCheckboxs = document.querySelectorAll(".box1 input");
const rightCheckboxs = document.querySelectorAll(".box3 input");
const rightBtn = document.querySelector("#rightBtn")
// console.log(rightCheckboxs)
const leftDataArr = [];

for (let i = 0; i < leftCheckboxs.length; i++) {
    leftCheckboxs[i].addEventListener("change", function () {

        if (leftCheckboxs[i].checked) {
            const obj = {
                position: i,
                parent: leftCheckboxs[i].parentElement
            }
            leftDataArr.push(obj);

        } else {
            const unchekposition = i;
            // [for debug] const temp = [...leftDataArr];

            for (let j = 0; j < leftDataArr.length; j++) {
                let arrPos = leftDataArr[j].position
                if (arrPos === unchekposition) {
                    // [for debug] console.log("mujhe array se nikal do ", unchekposition);
                    // [for debug] console.log("before deleting");
                    // [for debug] console.log(temp);
                    leftDataArr.splice(j, 1)
                    // [for debug] console.log("After deleting");
                    // [for debug] 
                    console.log(leftDataArr);

                }

            }

        }

        if (leftDataArr.length > 0) {
            rightBtn.style.backgroundColor = "red";
        } else {
            rightBtn.style.backgroundColor = "gray";
        }
    })
}
