let column_1 = Array(30)
	.fill()
	.map(()=> Math.floor(10*Math.random()));
let column_2 = Array(30)
	.fill()
	.map(()=> Math.floor(10*Math.random()));
let column_3 = Array(30)
	.fill()
	.map(()=> Math.floor((60*Math.random())+40));
let column_4 = Array(30)
	.fill()
	.map(()=> Math.floor((60*Math.random())+40));

let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;

for (let i=0; i<column_1.length; i++) {
	sum_1 += column_1[i];
	sum_2 += column_2[i];
	sum_3 += column_3[i];
	sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let sum = 0;

for (let i=0; i<sums.length; i++) {
	sum += sums[i];
}


const results = {
	col1: column_1,
	col2: column_2,
	col3: column_3,
	col4: column_4,
	sums: sums,
	total_score: sum
}

console.log(results);