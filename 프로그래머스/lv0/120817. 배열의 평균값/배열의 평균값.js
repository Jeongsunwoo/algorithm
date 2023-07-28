function solution(numbers) {   
    let answer = 0;
    for(i=0;i < numbers.length; i++){
        answer += numbers[i];
    }
    
    return answer/numbers.length;
}
    
//     var answer = numbers.reduce((a,b) => a+b)/numbers.length;
    
//     return answer;