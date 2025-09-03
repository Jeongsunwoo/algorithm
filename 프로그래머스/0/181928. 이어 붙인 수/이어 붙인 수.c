#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int solution(int num_list[], size_t num_list_len) {
    
    int num_even = 0;
    int num_odd = 0;
    
    for(int i = 0; i < num_list_len; i++){
        num_list[i] & 1?(num_even = num_even * 10 + num_list[i]):(num_odd = num_odd * 10 + num_list[i]);
        //num_list[i] % 2 == 0?(num_even = num_even * 10 + num_list[i]):(num_odd = num_odd * 10 + num_list[i]);
    }
    return num_even + num_odd;
}