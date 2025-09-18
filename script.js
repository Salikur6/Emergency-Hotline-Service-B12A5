// const { createElement } = require("react");

const hearts = document.getElementsByClassName("heart");
const mainHeart = document.getElementById("main-heart");

let count = 0;

for (let heart of hearts) {
    heart.addEventListener("click", (e) => {

        console.log(typeof (mainHeart))

        count++
        mainHeart.innerText = count
        console.log(count)

    })
};

const cards = document.getElementsByClassName("card-body");
const callBtns = document.getElementsByClassName("call-btn");
let coin = 100;
const coins = document.getElementById("coins")
const callDetails = document.getElementById("call-details");

let callHistory = [];


// console.log(callBtns)
for (const callbtn of callBtns) {
    callbtn.addEventListener("click", (e) => {
        // console.log(callbtn)

        const card1 = e.currentTarget.parentElement.parentElement.parentElement.children;
        // console.log(card1)
        const time = new Date();

        const titleh2 = card1[1].children[0];
        // console.log(titleh2.innerText)
        const titlep = card1[1].children[1]
        // console.log(titlep.innerText);
        const callNum = card1[1].children[2].children[0]
        console.log(callNum.innerText)


        if (coin >= 20) {
            alert(`📞 Calling ${titleh2.innerText} ${callNum.innerText}...`)

            coin = coin - 20;
            coins.innerText = coin;

            const data = {
                title: titleh2.innerText,
                num: callNum.innerText,
                date: time.toLocaleTimeString("en-GB")
            }
            callHistory.push(data);

        } else {
            alert("❌ Not enough coins! You need atleast 20 coins for call")
        }



        console.log(callHistory)


        callDetails.innerText = ""

        for (const history of callHistory) {
            console.log(history)
            const div = document.createElement("div");
            div.innerHTML = `
             <div class="flex items-center justify-between p-4 gap-2 bg-[#fafafa] rounded-[8px]">
                                <div>
                                    <h2 class="font-bold">${history.title}</h2>
                                    <h5>${history.num}</h5>
                                </div>

                                <div>
                                    <p class="font-semibold"><data value="time">${history.date}</data></p>
                                </div>
                            </div>
            `;

            callDetails.appendChild(div)
        }


    })
}

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    console.log("clicked")
    callHistory = []
    callDetails.innerHTML = ""
})

const copybtn = document.getElementsByClassName("copy");
const copyNum = document.getElementById("copy-num")
let copyCount = 0;


for (const copy of copybtn) {
    copy.addEventListener("click", () => {
        const content = copy.parentElement.parentElement;
        console.log(content)

        const number = content.querySelector(".number").innerText

        navigator.clipboard.writeText(number).then(() => {
            // success feedback
            alert(`Copied: ${number}`)
            const original = copy.textContent;
            copy.textContent = 'Copied!';
            setTimeout(() => (copy.textContent = original), 1000);
            copyCount++
            copyNum.innerText = copyCount
        }).catch((err) => {
            console.error('Copy failed', err);
        });
    })
}








