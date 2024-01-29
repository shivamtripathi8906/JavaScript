function callMe (){
  console.log("Called 1st");
}
console.log("Function will be called in 3 seconds");
setTimeout(callMe, 3000);

function secondCall(){
  console.log("Socond print")
}

setTimeout(secondCall, 2000);
console.log("End")