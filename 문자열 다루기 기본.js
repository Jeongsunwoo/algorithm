// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    if (s.length !== 4 && s.length !== 6) { //문자열 s길이 4 그리고 6 이 아닐시 false
        return false;
    }
    
    for (let i = 0; i < s.length; i++) { 
        if (isNaN(parseInt(s[i]))) { // 문자이면 true 아니면 false
            return false; // 문자가 포함되어 있을시 false return
        }
    }
    return true;
}