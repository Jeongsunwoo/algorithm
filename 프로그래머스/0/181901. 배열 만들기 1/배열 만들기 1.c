#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int n, int k) {
    int count = n / k;  // k의 배수 개수

    int* answer = (int*)malloc(sizeof(int) * count);

    for (int i = 0; i < count; i++) {
        answer[i] = (i + 1) * k;
    }

    return answer;
}
