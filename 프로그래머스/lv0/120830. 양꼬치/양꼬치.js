function solution(n,k) {
    let answer;
    let answer2 = (12000*n) + (2000*k);
        answer = answer2 - (2000*(Math.floor(n / 10)));
    return answer;
}