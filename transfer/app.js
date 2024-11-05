const leftCheckboxs = document.querySelectorAll(".box1 input");
const rightCheckboxs = document.querySelectorAll(".box3 input");
const rightBtn = document.querySelector("#rightBtn")
const leftBtn = document.querySelector("#leftBtn");
// console.log(rightCheckboxs)
const leftDataArr = [];
const righDataArr = [];

function constructTransfer(checkBoxes, dataArr, btn) {
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener("change", function () {

            if (checkBoxes[i].checked) {
                const obj = {
                    position: i,
                    parent: checkBoxes[i].parentElement
                }
                dataArr.push(obj);

            } else {
                const unchekposition = i;
                // [for debug] const temp = [...leftDataArr];

                for (let j = 0; j < dataArr.length; j++) {
                    let arrPos = dataArr[j].position
                    if (arrPos === unchekposition) {
                        // [for debug] console.log("mujhe array se nikal do ", unchekposition);
                        // [for debug] console.log("before deleting");
                        // [for debug] console.log(temp);
                        dataArr.splice(j, 1)
                        // [for debug] console.log("After deleting");
                        // [for debug] 
                        console.log(dataArr);

                    }

                }

            }

            if (dataArr.length > 0) {
                btn.style.backgroundColor = "red";
            } else {
                btn.style.backgroundColor = "gray";
            }
        })
    }
}

constructTransfer(leftCheckboxs, leftDataArr, rightBtn)

constructTransfer(rightCheckboxs, righDataArr, leftBtn)