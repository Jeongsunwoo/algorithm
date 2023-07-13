function solution(n) {
    let answer = [];
    for(let x = 0;x < n;x++){
        if(n % x == 1){
        answer.push(x); // 나머지가 1이 되도록 하는 자연수 answer배열에 담기
        }
    }
    return minValue = Math.min(...answer); // 배열안에 최소값 찾기
}