function solution(number) {
    let answer = 0;
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i] + number[j] + number[k] === 0){
                    answer ++;
                    //경우의 수를 다 더하고 0일때 방법의 수를 1더한다
                }
            }
        }
    }
    return answer;
}