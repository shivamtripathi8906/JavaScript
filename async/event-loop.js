console.log("First");

setTimeout(function greet(){
  console.log("Second");
}, 5000)

console.log("Third");

setTimeout(function greet1(){
  console.log("4")
}, 1000)

let i = 1;
while(i < 10000)
{
  console.log(i);
  i++
}
