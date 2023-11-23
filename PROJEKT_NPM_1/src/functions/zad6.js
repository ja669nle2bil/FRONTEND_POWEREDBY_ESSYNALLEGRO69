export function pali(str) {
	let revStr=str.split('').reverse().join('');
	return str == revStr;
}
// console.log(pali('babcia')); //false