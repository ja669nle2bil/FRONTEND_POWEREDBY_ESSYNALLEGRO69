export function range(a,b){
	let arr=[];
	for(let i=a; i<=b; i++) {
			arr.push(i);
	}
	console.log(arr);
	return arr;
}
/* console.log(range(2,4)); */
// range(2,7);


/* const fs=require('fs');
fs.readFile('path/to/file.js', 'utf8', (err, data) => {
		if(err) {
			console.error(err);
			return
		}
		console.log(data);
});
*/