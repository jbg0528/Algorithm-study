function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var head, bottom;
  if (denom1 >= denom2) {
    if (denom1 % denom2 === 0) {
      head = (denom1 / denom2) * numer2 + numer1;
      bottom = denom1;
    } else {
      head = numer1 * denom2 + numer2 * denom1;
      bottom = denom1 * denom2;
    }
  } else if (denom1 < denom2) {
    if (denom2 % denom1 === 0) {
      head = (denom2 / denom1) * numer1 + numer2;
      bottom = denom2;
    } else {
      head = numer1 * denom2 + numer2 * denom1;
      bottom = denom1 * denom2;
    }
  }
  answer.push(head / gcd(head, bottom), bottom / gcd(head, bottom));
  return answer;
}
