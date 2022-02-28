let present = 1;

function next() {
    console.log(`다음 버튼을 눌렀습니다.`);
    let numChe = document.getElementsByClassName("number")[0]
    switch (present) {
        case 1:
            numChe.innerHTML = `<p>2번</p>`;
            present ++;
            break;
        case 2:
            numChe.innerHTML = `<p>3번</p>`;
            present ++;
            break;
        case 3:
            numChe.innerHTML = `<p>4번</p>`;
            present ++;
            break;
        case 4:
            numChe.innerHTML = `<p>5번</p><img src="05.jpg">`;
            present ++;
            break;
        case 5:
            numChe.innerHTML = `<p>수고하셨습니다!</p>`;
            present ++;
            break;
        case 6:
            console.log(`마지막 번호입니다.`);
            break;
        default:
            console.log(`ERROR - 현재 페이지 번호를 찾을 수 없음`);
            console.log(present);
            break;
    }
}

function back() {
    console.log(`이전 버튼을 눌렀습니다.`);
    let numChe = document.getElementsByClassName("number")[0]
    switch (present) {
        case 1:
            console.log(`첫 번째 번호입니다.`);
            break;
        case 2:
            numChe.innerHTML = `<p>1번</p>`;
            present --;
            break;
        case 3:
            numChe.innerHTML = `<p>2번</p>`;
            present --;
            break;
        case 4:
            numChe.innerHTML = `<p>3번</p>`;
            present --;
            break;
        case 5:
            numChe.innerHTML = `<p>4번</p>`;
            present --;
            break;
        case 6:
            numChe.innerHTML = `<p>5번</p><img src="05.jpg">`;
            present --;
            break;
        default:
            console.log(`ERROR - 현재 페이지 번호를 찾을 수 없음`);
            console.log(present);
            break;
    }
}

//키보드 앞 뒤 기능 추가.
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        back();
    }
    else if (e.keyCode == '39') {
        next();
    }
}