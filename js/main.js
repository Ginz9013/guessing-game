// Title h1
const titleDOM = document.getElementById("title");
// 最小值的 h2
const minNumDOM = document.getElementById("minNum");
// 最大值的 h2
const maxNumDOM = document.getElementById("maxNum");
// input
const guessDOM = document.getElementById("guess");
// button
const btn = document.getElementById("check");

// scope
const scopeDOM = document.getElementById("scope");

let minNum = 1;
let maxNum = 100;
const answer = Math.floor(Math.random() * 100 + 1);
console.log(answer)

btn.addEventListener("click", function() {
    const guessNum = +guessDOM.value;

    if(guessNum === answer) {
        titleDOM.innerText = "恭喜答對"
        scopeDOM.innerHTML = `<h1 class='fs-1'>${answer}</h1>`
    }

    if(guessNum > maxNum || guessNum < minNum) {
        alert("請輸入正確數字");
        return;
    }

    if(guessNum > answer && guessNum <= maxNum) {
        maxNum = guessNum;
        maxNumDOM.innerText = maxNum;
    }

    if(guessNum < answer && guessNum >= 1) {
        minNum = guessNum;
        minNumDOM.innerText = minNum;
    }
})