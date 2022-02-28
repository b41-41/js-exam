let time = 480; //기준시간
let min = "";
let sec = "";

function timeCal() {
    min = parseInt(time / 60); //몫을 계산
    sec = time % 60; //나머지를 계산

    document.getElementById("timer").innerHTML = `남은시간 : ${min}:${sec}`;
    time--;

    //타임아웃 시
    if (time < 0) {
        clearInterval(x) //setInterval() 실행을 끝냄
        document.getElementById("timer").innerHTML = `시간초과`;
    }
}

//setInterval(함수, 시간) : 주기적인 실행
let x = setInterval(timeCal, 1000);
x();