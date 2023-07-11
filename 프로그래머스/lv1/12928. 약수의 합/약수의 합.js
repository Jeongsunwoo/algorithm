function solution(n) {
    let answer = 0;
    for(let i=0;i<=n;i++){
        if(n%i == 0){ // n의 약수 찾기
           answer += i; //찾은 약수를 answer에 더함
        }
    }
    return answer;
}