export function fibonacci(n) {
	let seq=[0,1];
	for (let i=2; i<n; i++){
		seq[i]=seq[i-1]+seq[i-2];
	}
	return seq;
}
// console.log(fibonacci(9));