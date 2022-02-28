'use strict';

function time() {
    //시험 시간 지정
    const examStart = 1800; //시험 시작 시간
    const examEnd = 1843; //시험 끝나는 시간

    //시간 불러오기
    const now = new Date();

    //1자리 숫자일 때 2자리로 맞춰주기
    function changeDouble(time) {
        time = String(time); //String으로 변환
        if (time.length < 2) {
            return time = `0${time}`
        } else {
            return time
        }
    }

    //utc 기준 시간 계산
    const utc =
        now.getTime() +
        (now.getTimezoneOffset() * 60 * 1000);

    //utc to kst
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_now =
        new Date(utc + (KR_TIME_DIFF));

    //한국시간(시+분)
    let kr_hm = `${kr_now.getHours()}${changeDouble(kr_now.getMinutes())}`

    //특정 시간에 페이지 숨기기
    const examDiv = document.getElementById('exam');
    if (kr_hm >= examStart && kr_hm < examEnd) {
        //exam div 내용 보이기
        examDiv.style.display = 'block';
    } else {
        //exam div 내용 숨기기
        examDiv.style.display = 'none';
    }

    //시험 남은 시간 타이머
    const remainTime = examEnd - kr_hm - 1;
    const remainSeconds = now.getSeconds();

    if (kr_hm < examStart) {
        document.getElementById("timer").innerText = `시험은 ${examStart}에 시작합니다.`;
    } else if (kr_hm >= examEnd) {
        document.getElementById("timer").innerText = `시험이 끝났습니다. \n 수고하셨습니다.`;
    } else {
        if (remainTime < 1) {
            document.getElementById("timer").innerHTML = `남은시간 : ${60 - remainSeconds}초`;
        } else {
            document.getElementById("timer").innerHTML = `남은시간 : ${remainTime}분 ${60 - remainSeconds}초`;
        }
    }
}
//1초마다 갱신
function init() {
    setInterval(time, 1000);
}
console.log(`우리반 친구들 시험 파이팅!!😆  - 선생님`);

init();