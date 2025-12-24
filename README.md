# 1224_-
console.log("1224_1");


function load1() { // load1이라는 함수를 생성 (원하는 css 불러오기) 
    var html = ""; //html 변수 문자열로 생성

    for(i=0;i<25;i++) {
        let css1 = "1"
        if (i%2===0) css1 = "2"
        if (i === 6) css1 = "3"
        html += `<div class="bg${css1}"></div>`; 
    }
    document.getElementsByTagName("section")[0].innerHTML = html;
    state = true;
}

function load2() {

    document.getElementsByTagName("section")[0].innerHTML = "";
    state = false;
}
var state = false;
function load3() {
    if(!state) load1();
    else load2();

}
