function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){ // left와 right 까지의 값 구하기
        let count = 0;
        for(let j = 0; j <= i; j++){ // 약수의 개수 구하기
            if(i % j == 0){
                count ++; //약수의 개수
            }
        }
        if(count % 2 == 0){ //약수의 개수가 짝수이면
            answer += i;
        }else{
            answer -= i;
             }
    }
    return answer
}