/* function isHapiNum(n){
	let sum=0;
	while(n>0){
		digit=n%10;
		sum+=digit * digit;
		n=Math.floor(n/10);
	}
	return sum==1;
}
console.log(isHapiNum(19));
*/
export function isHappyNumber(num) {
    let seen = new Set();
    while (num != 1 && !seen.has(num)) {
        seen.add(num);
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num == 1;
}