let present = 1;
function printImg() {
    let numChe = document.getElementsByClassName("number")[0]
    numChe.innerHTML = `<img src="img/${present}.jpg">`;
}

function next() {
    console.log(`다음 버튼을 눌렀습니다.`);
    if (present == 20) {
        console.log(`마지막 페이지입니다.`);
    } else {
        present ++;
    console.log(present);
    printImg();
    }
    }

function back() {
    if (present == 1) {
        console.log(`첫 페이지입니다.`);
    } else {
        present --;
    console.log(present);
    printImg();
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