let a = [1, 3, 5, 1, 8, 10, 45]; 
let k = 3;

const length = a.length;

// for (let x = 0; x < length; x++){
//   console.log(a[x]);
// }
let count = k;
let newArray = new Array(length);
for (let x = 0; x < length; x++)
{
 if(x < k) 
 {
 newArray[x] = a[length - count];
 count--;
 }
 else if(x >= k)
 {
  newArray[x] = a[count];
  count++;
 }
 
}

console.log(newArray);