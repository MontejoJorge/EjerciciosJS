var a1 = [[],[],[]];

a1[0][0] = 1;
a1[0][1] = 2;
a1[0][2] = 3;

a1[1][0] = 3;
a1[1][1] = 2;
a1[1][2] = 1;


a1[2][0] = a1[0][0]+a1[1][0];
a1[2][1] = a1[0][1]+a1[1][1];
a1[2][2] = a1[0][2]+a1[1][2];

console.log(a1[2][0])
console.log(a1[2][1])
console.log(a1[2][2])
