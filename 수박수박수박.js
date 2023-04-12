// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
    var answer = '';
    let i = 0
    while(i<n){
        if(i % 2 == 0){ //while문 안에 if문을 활용하여 i가 짝수이면 "수"
            answer += "수"
        }
        if(i % 2 == 1){ //i가 홀수이면 "박"
            answer += "박"
        }
        i++
    }
    return answer;
}