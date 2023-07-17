function solution(n, m) { // 유클리드 호제법 이용
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    //GCD(n, m) = GCD(m, r) n를 m로 나눈 나머지를 r (최소공약수)
    const lcm = (a, b) => a * b / gcd(a, b);
    // 두 수의 곱을 최대공약수로 나눈다.(최소공배수)
    return [gcd(n, m), lcm(n, m)];
}